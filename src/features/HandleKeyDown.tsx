export const HandleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
  if (["+", "-", ".", "e", "E"].includes(e.key)) {
    e.preventDefault();
  }
};
