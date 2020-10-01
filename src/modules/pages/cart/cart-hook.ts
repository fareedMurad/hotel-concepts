const useCartData = () => {
  const cartData = [
    {
      name: 'Tactics of Increasing Revenue',
      author: 'Chris Confer',
      amount: 1,
      price: 29.99,
      preordered: true,
      img: '/src/assets/marketplace/marketplace-4.png'
    },
    {
      name: 'Tactics of Increasing Revenue2',
      author: 'Chris Confer',
      amount: 1,
      price: 29.99,
      preordered: false,
      img: '/src/assets/marketplace/marketplace-4.png'
    }
  ];
  return { cartData };
};

export { useCartData };
