const useStoryMissionData = () => {
  const anchors = [
    { id: 1, caption: 'Overview', rate: '1.0', anchor: '#overview' },
    { id: 2, caption: 'Mission & Vision', rate: '2.0', anchor: '#mission' },
    { id: 3, caption: 'Our work', rate: '3.0', anchor: '#our-work' },
    { id: 4, caption: 'Values', rate: '4.0', anchor: '#values' }
  ];

  return { anchors };
};

export { useStoryMissionData };
