import express from 'express';
import photo from './api/photo';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  const imagesFilenames: string[] = fs
    .readdirSync(path.resolve('all/photos/Before'))
    .map((filename) => filename.slice(0, -4));
  res.render('index', { filenames: imagesFilenames });
});

router.use('/photos', photo); 

export default router;
