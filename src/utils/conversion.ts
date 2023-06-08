import sharp from 'sharp';
import path from 'path';

const beforeResize = (
  filename: string,
  height: number,
  width: number
): Promise<Buffer> => {
  return sharp(path.resolve(`all/photos/Before/${filename}.jpg`))
    .resize({
      width: width,
      height: height,
    })
    .toBuffer();
};

const afterResize = (
  filename: string,
  height: number,
  width: number
): string => {
  return `all/photos/After/${filename}${height}x${width}.jpg`;
};

export { beforeResize, afterResize };
