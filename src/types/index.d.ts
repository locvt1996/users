export {};

declare global {
  interface Window {
    location: {
      pathname: string;
    };
  }
}
