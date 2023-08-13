import productRepo from '@src/repos/product-repo';
import { IProduct } from '@src/models/Product';
import { RouteError } from '@src/declarations/classes';
import HttpStatusCodes from '@src/declarations/major/HttpStatusCodes';

export const productNotFoundErr = 'Product not found';

function getAll(): Promise<IProduct[]> {
  return productRepo.getAll();
}

function addOne(product: IProduct): Promise<void> {
  return productRepo.add(product);
}

async function updateOne(product: IProduct): Promise<void> {
  const persists = await productRepo.persists(product.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      productNotFoundErr,
    );
  }
  return productRepo.update(product);
}

async function _delete(id: number): Promise<void> {
  const persists = await productRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      productNotFoundErr,
    );
  }
  return productRepo.delete(id);
}

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
