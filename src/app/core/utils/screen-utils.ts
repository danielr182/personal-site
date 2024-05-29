export const ScreenUtils = {
  goToSpecificElementById(
    elementId: string,
    behavior: ScrollBehavior = 'smooth'
  ): void {
    document.querySelector(`#${elementId}`)?.scrollIntoView({ behavior });
  },
};
