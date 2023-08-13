import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';

import productService from '@src/services/product-service';
import { IReq, IRes } from './shared/types';

const paths = {
  basePath: '/products',
  get: '/',
} as const;

async function getAll(_: IReq, res: IRes) {
  const products = await productService.getAll();
  return res.status(HttpStatusCodes.OK).json({ products });
}

export default {
  paths,
  getAll,
} as const;
