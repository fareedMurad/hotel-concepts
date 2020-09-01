export const scrollTo = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollBy({
      top: section.offsetTop - window.pageYOffset - 89,
      behavior: 'smooth'
    });
  }
};
