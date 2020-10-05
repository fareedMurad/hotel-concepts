import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart as cartAction, getProducts } from '@app/redux/cart';
import { ContentType, CurrenciesesCharacters } from '@app/models/enum';
import { checkout } from '@app/redux/checkout';
import { isBackgroundWhite } from '@core/components/header/store';

const useCartData = () => {
  const dispatch = useDispatch();

  /**
   * change header theme
   */
  useEffect(() => {
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);

  const { cart, products } = useSelector((state: State) => state.cart);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (cart.length !== products.length || cart.length === 0)
    return { cartData: null, summaryData: null };

  /**
   * REFACTOR THIS SHIT IN FUTURE
   */
  const cartData = products.map(item => {
    const itemCopy = JSON.parse(JSON.stringify(item));
    const {
      __typename,
      name,
      pricing: { price },
      price: priceWithoutCurrency,
      id
    } = itemCopy;

    const itemFromLocalStorage = cart.find(el => el.path === item.id);
    const { quantity } = itemFromLocalStorage || {};

    //hack for price
    const hasPrice = Object.keys(price).length > 0;
    const priceResult = `${hasPrice ? Object.values(price)[0] : 0} ${
      hasPrice ? CurrenciesesCharacters[Object.keys(price)[0]] : null
    } `;

    let author = '';
    let imageSource = '';
    debugger;
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
      price: priceResult,
      id,
      imageSource
    };
  });
  debugger;
  let totalPriceNumber = products
    .map(item => item.price)
    .reduce((accum, cur) => accum + cur);

  // refactor in future
  const total = `${totalPriceNumber} ${
    CurrenciesesCharacters[Object.keys(products[0].pricing.price)[0]]
  }`;

  return {
    cartData,
    summaryData: {
      total,
      estimatedShipping: '',
      estimatedTax: '0 $',
      onClick: () => {
        const items = cartData.map(item => ({
          path: item.id,
          quantity: item.quantity
        }));
        dispatch(checkout(items));
      }
    }
  };
};

export { useCartData };
