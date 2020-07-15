const useProgramData = () => {
  const navButtons = [
    {
      name: "About",
      anchor: "about"
    },
    {
      name: "Content",
      anchor: "content"
    },
    {
      name: "Facility",
      anchor: "facility"
    },
    {
      name: "Results",
      anchor: "results"
    },
    {
      name: "Feedbacks",
      anchor: "get-involved"
    }
  ];

  return { navButtons };
};

export { useProgramData };
