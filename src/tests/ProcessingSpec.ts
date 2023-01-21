import image_processing from '../Processing';
import path from 'path';
const height = 600;
const width = 300;
const inputImage = path.join(__dirname, 'images', '1.jpg');
const outputImage = path.join(
  __dirname,
  'images',
  'thumb',
  `encenadaport_${width}_${height}.jpg`
);
it('if resizing process is done or not ', () => {
  expect(image_processing(inputImage, outputImage, height, width)).toBeTruthy();
});
