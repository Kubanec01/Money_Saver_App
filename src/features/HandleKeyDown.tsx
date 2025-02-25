export const HandleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
  if (["+", "-"].includes(e.key)) {
    e.preventDefault();
  }
};
