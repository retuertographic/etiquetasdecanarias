// Widths next/image may request; shared by next.config.ts and scripts/optimize-images.mjs.
export const DEVICE_SIZES = [640, 828, 1200, 1920];
export const IMAGE_SIZES = [128, 256, 384];
export const IMAGE_WIDTHS = [...IMAGE_SIZES, ...DEVICE_SIZES];
