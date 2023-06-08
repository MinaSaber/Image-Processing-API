import express from 'express';
import path from 'path';
import { beforeResize, afterResize } from '../../utils/conversion';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

const photo = express.Router();

photo.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const filename = <string><unknown>req.query.filename;
    const height = parseInt(<string><unknown>req.query.height);
    const width = parseInt(<string><unknown>req.query.width);
    const after: string = afterResize(filename, height, width);
    if (!fs.existsSync(after)) {
      const before = await beforeResize(filename, height, width);
      await fsPromises.writeFile(after, before);
    }
    res.sendFile(path.resolve(after));
  } catch (err:any) {
    res.render('errors', { message: err.message });
  }
});

export default photo;
