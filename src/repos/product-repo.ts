import { IProduct } from '@src/models/Product';
import { getRandomInt } from '@src/declarations/functions';
import orm from './mock-orm';

async function getOne(id: number): Promise<IProduct | null> {
  const db = await orm.openDb();
  for (const product of db.products) {
    if (product.id === id) {
      return product;
    }
  }
  return null;
}

async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const product of db.products) {
    if (product.id === id) {
      return true;
    }
  }
  return false;
}

async function getAll(): Promise<IProduct[]> {
  const db = await orm.openDb();
  return db.products;
}

async function add(product: IProduct): Promise<void> {
  const db = await orm.openDb();
  product.id = getRandomInt();
  db.products.push(product);
  return orm.saveDb(db);
}

async function update(product: IProduct): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.products.length; i++) {
    if (db.products[i].id === product.id) {
      db.products[i] = product;
      return orm.saveDb(db);
    }
  }
}

async function _delete(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.products.length; i++) {
    if (db.products[i].id === id) {
      db.products.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: _delete,
} as const;
