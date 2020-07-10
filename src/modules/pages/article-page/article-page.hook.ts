const useArticlePageData = () => {
  // FIRST SECTION
  const tags = [
    { id: 1, caption: 'Marketing' },
    { id: 2, caption: 'Marketing' },
    { id: 3, caption: 'Marketing' }
  ];
  const readingTime = '1:13';
  const heroTitle = 'Stop Making These 4 Customer Service Mistakes';
  const heroDescription =
    'Whether your business is hospitality, event management, field services, or transportation, the heartbeat of your business relies on your customer service. Poor customer service can make or break your customer’s experience, leaving them singing your praises to their friends and family, or refusing to use your service ever again.';
  const bodyContent = [
    `Whether your business is hospitality, event management, field services, or transportation, the heartbeat of your business relies on your customer service. Poor customer service can make or break your customer’s experience, leaving them singing your praises to their friends and family, or refusing to use your service ever again.
  `,
    `Providing exceptional customer service requires exceptional communication within your organization. Business operations must move as smoothly as possible. For years, businesses have relied on two-way radios and walkie talkies as their communication solution, but in the age of smartphones and mobility, walkie talkies can no longer be relied upon to provide for the needs of your business communication. Voxer Business can change that.`,

    `One of the core problems with walkie talkies is a lack of accountability. Unless you are available to hear the message live when it is received, the message is lost. Missing an important message can completely change the course of an event or job at a specific site. What’s worse, with walkie talkies you don’t know where that employee is, who they are with, or sometimes even who is speaking.
  
Voxer Business holds you and your entire staff accountable with a timestamp and location data sent with every single message. Additionally, you no longer need to worry about missing crucial information because every message on Voxer Business is both live and recorded, so if you are not available to receive a message in real-time, you can go back and listen later. The ability to listen to previous messages eliminates “he said, she said” scenarios and holds your entire team accountable.
  `,
    `
Phone calls and text messages are problematic because they create unnecessary back and forth. If someone on the other end of a call is unavailable, it requires leaving a voicemail and calling back. Relaying information through text messages is time consuming and leaves too much room for error (autocorrect anyone?).
  
  `,
    `
While the average length of a phone call is three minutes, the average message on Voxer is 6–8 seconds. Simply open your phone, select your chat, push the talk button and your message is sent. Relaying information faster means that employees receive information faster and can act quicker to deliver the best possible experience for your customers.
  
  `
  ];
  const bodyTitle = ['No Accountability', 'Slow Response Time'];

  return {
    tags,
    readingTime,
    heroTitle,
    heroDescription,
    bodyContent,
    bodyTitle
  };
};

export { useArticlePageData };
