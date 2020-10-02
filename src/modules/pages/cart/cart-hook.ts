import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart as cartAction, getProducts } from '@app/redux/cart';
import { ContentType } from '@app/models/enum';

const useCartData = () => {
  const dispatch = useDispatch();

  const { cart, products } = useSelector((state: State) => state.cart);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  /**
   * REFACTOR THIS SHIT IN FUTURE
   */
  const cartData = products.map(item => {
    const itemCopy = JSON.parse(JSON.stringify(item));
    const {
      ____typename,
      name,
      pricing: { price },
      price: priceWithoutCurrency,
      id
    } = itemCopy;

    const itemFromLocalStorage = cart.find(el => el.path === item.id);
    const { quantity } = itemFromLocalStorage || {};
    const priceResult = priceWithoutCurrency + '$';
    let author = '';

    switch (____typename) {
      case ContentType.product: {
        author = itemCopy?.authors?.map(author => author.name).join(' ');
      }
      case ContentType.onlineCourse: {
        author = '';
      }
    }

    return { name, author, quantity, price: priceResult, id };
  });

  return {
    cartData,
    summaryData: {
      total: '100 $',
      estimatedShipping: 'Free',
      estimatedTax: '10 $'
    }
  };
};

export { useCartData };
