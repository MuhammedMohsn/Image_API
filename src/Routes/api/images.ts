import express from 'express';
import path from 'path';
import fs from 'fs';
import image_processing from '../../Processing';
const routes = express.Router();
routes.get('/', (req: express.Request, res: express.Response): void => {
  // Query parmeters
  const filename = req.query.filename;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  // Imgs pathes
  const inputImgPath = path.join(__dirname, 'images', `${filename}`);
  const outputImgPath = path.join(
    __dirname,
    'images',
    'thumb',
    `${path.basename(filename as string, '.jpg')}_${width}_${height}.jpg`
  );
  // Validation the values of query parameters
  if (width < 5 || height < 5 || !/(\w+|\d+).jpg/gi.test(filename as string)) {
    //  message for user if he enters invalid query parameter
    res.status(404).send('please put valid query parmeters');
  } else {
    // check if the resized image is found before or not for caching
    fs.open(outputImgPath, 'r', (err) => {
      if (err) {
        image_processing(inputImgPath, outputImgPath, height, width, res);
      } else {
        res.status(200).sendFile(outputImgPath);
      }
    });
  }
});
export default routes;
