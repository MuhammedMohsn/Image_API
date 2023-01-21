import sharp from 'sharp';
import express from 'express';
function image_processing(
  inputImagePath: string,
  outputImagePath: string,
  height: number,
  width: number,
  res?: express.Response
): boolean {
  sharp(inputImagePath)
    .resize(width, height)
    .toFile(outputImagePath, (err) => {
      //putting? to res to avoid access to undefined value if res object not passed to function
      if (err) {
        // message for user when there is an error when resizing of image
        res
          ?.status(404)
          .send('failure in processing,please select an existing image');
      } else {
        res?.status(200).sendFile(outputImagePath);
      }
    });
  return true;
}
export default image_processing;
