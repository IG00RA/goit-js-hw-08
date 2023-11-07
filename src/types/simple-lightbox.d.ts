declare module 'simplelightbox' {
  class SimpleLightbox {
    constructor(selector: string, options?: SimpleLightboxOptions);

    open(): void;
    close(): void;
    next(): void;
    prev(): void;
  }

  interface SimpleLightboxOptions {
    captionDelay: number;
  }

  export = SimpleLightbox;
}
