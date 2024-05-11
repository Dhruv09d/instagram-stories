let timerId: NodeJS.Timeout;

export const debounce = (
  func: { (): void; (...args: any[]): void },
  delay: number,
) => {
  clearTimeout(timerId);
  timerId = setTimeout(func, delay);
};
