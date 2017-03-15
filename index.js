import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: [] });
});

export default router;
