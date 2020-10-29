/*
 * Unlimited access data
 */

export type CardType = {
  type: 'text' | 'button';
  title?: string;
  description?: string;
  highlighted?: string;
  buttonText?: string;
  navTo?: string;
};

const useUnlimitedData = () => {
  const cards: CardType[] = [
    {
      type: 'text',
      title: 'Unlimited access to premium content',
      description:
        'We are international, we stress the links between politics and business, we are irreverent and we are independent. If it matters in our world we cover it - and cover it well.',
      highlighted: '20+ new ebooks monthly'
    },
    {
      type: 'text',
      title: ' A unique global perspective',
      description:
        'We are international, we stress the links between politics and business, we are irreverent and we are independent.      ',
      highlighted: 'If it matters in our world we cover it - and cover it well.'
    },
    {
      type: 'text',
      title: ' Information vital for you',
      description: '',
      highlighted: 'Focus on what is essential'
    },
    {
      type: 'text',
      title: 'Delivered by world-class experts',
      description:
        'We are international, we stress the links between politics and business, we are irreverent and we are independent',
      highlighted: 'If it matters in our world we cover it - and cover it well.'
    },
    {
      type: 'button',
      title: 'Individual subscription',
      buttonText: 'Learn more',
      navTo: ''
    },
    {
      type: 'button',
      title: 'Corporate Subscription',
      buttonText: 'Learn more',
      navTo: ''
    }
  ];

  return { cards };
};

export { useUnlimitedData };
