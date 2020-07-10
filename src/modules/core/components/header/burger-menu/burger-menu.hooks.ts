const useMenuData = () => {

  const mainLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Online Programs",
      path: "/"
    },
    {
      name: "Insights",
      path: "/insights"
    }
  ];

  const secondaryLinks = [
    {
      name: "For Corporate Clients",
      path: "/"
    },
    {
      name: "Program-Partnership",
      path: "/"
    },
    {
      name: "Contributors",
      path: "/"
    },
    {
      name: "Education Process",
      path: "/"
    },
    {
      name: "Our Story",
      path: "/"
    },
    {
      name: "Jobs",
      path: "/"
    },
    {
      name: "Contacts",
      path: "/"
    }
  ];
  return { mainLinks, secondaryLinks };
};

export { useMenuData };
