export interface StorageUploadFile extends File {
  url?: string;
}

export type StorageUploadType = 'image/jpeg' | 'image/png' | 'image/gif' | 'image/bmp';
