export interface StorageCarouselSize {
  width?: string;
  height?: string;
}

export interface StorageCarouselClick {
  index: number;
  value?: string;
}

export type StorageCarouselGesture = 'swipeleft' | 'swiperight';
