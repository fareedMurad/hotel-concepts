const useExperiencesAssignmentData = () => {
  const data = {
    id: 1,
    title: 'Experienced assignment reviewers',
    list: [
      { id: 1, caption: 'Personalised feedback' },
      {
        id: 2,
        caption: `Practical tips and industry best 
        practices`
      },
      {
        id: 3,
        caption: `Additional suggested resources 
        to improve`
      }
    ]
  };

  return { data };
};

export { useExperiencesAssignmentData };