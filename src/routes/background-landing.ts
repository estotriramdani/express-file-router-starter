import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const get = (req: Request, res: Response) => {
  // get from the file system
  const pathToFile = path.join(__dirname, '../assets/background-landing.jpg');

  // res.send(pathToFile)

  const stat = fs.stat(pathToFile, (err, stat) => {
    if (err) {
      console.log('An error occurred: ', err);
      res.status(500).send('An error occurred');
      return;
    }

    // set the headers
    res.writeHead(200, {
      'Content-Type': 'image/jpeg',
      'Content-Length': stat.size,
    });

    // create a read stream
    const readStream = fs.createReadStream(pathToFile);

    // attach this stream with the response
    readStream.pipe(res);
  });

}