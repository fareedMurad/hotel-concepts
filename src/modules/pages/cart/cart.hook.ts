import { ContentType, CurrenciesesCharacters } from '@app/models/enum';
import { getProducts } from '@app/redux/cart';
import { checkout } from '@app/redux/checkout';
import { State } from '@app/redux/state';
import { showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart as cartAction } from '@app/redux/cart';

const useCartData = () => {
  const dispatch = useDispatch();
  const {
    cart: { selectedProducts, products },
    auth: { authorized }
  } = useSelector((state: State) => state);

  useEffect(() => {
    if (selectedProducts?.length > products?.length) {
      dispatch(getProducts());
    }
  }, [selectedProducts]);

  if (
    selectedProducts?.length !== products?.length ||
    selectedProducts?.length === 0
  )
    return { cartData: null, summaryData: null };

  /**
   * REFACTOR THIS SHIT IN FUTURE
   */
  const cartData = products?.map(item => {
    const itemCopy = JSON.parse(JSON.stringify(item));
    const { __typename, name, pricing, price, id } = itemCopy;

    const itemFromLocalStorage = selectedProducts.find(
      el => el.path === item.id
    );
    const { quantity } = itemFromLocalStorage || {};

    //hack for price
    // const hasPrice = Object.keys(pricing).length > 0;
    // const priceResult = `${hasPrice ? Object.values(price)[0] : 0} ${
    //   hasPrice ? CurrenciesesCharacters[Object.keys(price)[0]] : null
    // } `;

    let author = '';
    let imageSource = '';

    switch (__typename) {
      case ContentType.product: {
        author = itemCopy?.authors?.map(author => author.name).join(' ');
        imageSource = itemCopy?.productImage?.file?.url;
        break;
      }
      case ContentType.onlineCourse: {
        author = ' ';
        imageSource = itemCopy?.courseImage?.file?.url;
        break;
      }
    }

    return {
      name,
      author,
      quantity,
      price,
      id,
      imageSource
    };
  });

  let totalPriceNumber = products
    .map(item => item.price)
    .reduce((accum, cur) => accum + cur);

  // refactor in future
  const total = `${totalPriceNumber} ${
    CurrenciesesCharacters[Object.keys(products[0].pricing.price)[0]]
  }`;

  const summaryData = {
    total: products
      ?.map(product => ({
        price: product.price,
        amount: selectedProducts.find(one => one.path == product.id).quantity
      }))
      ?.reduce((acc, cur) => acc + cur.price * cur.amount, 0),
    estimatedShipping: 'Free',
    estimatedTax: '0.00',
    onClick: () => {
      const items = cartData.map(item => ({
        path: item.id,
        quantity: item.quantity
      }));
      dispatch(checkout(items));
    },
    showInvoiceModal: () => {
      dispatch(showModal(Modals.invoiceRequest));
    }
  };

  /*
   * if user anauthorize show modal
   */

  return {
    products: cartData,
    summaryData,
    authorized
  };
};

export { useCartData };
