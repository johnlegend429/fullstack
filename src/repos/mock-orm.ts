/* eslint-disable @typescript-eslint/no-unsafe-return */

import jsonfile from 'jsonfile';

import { IProduct } from '@src/models/Product';


// **** Variables **** //

const dbFileName = 'database.json';


// **** Types **** //

interface IDb {
  products: IProduct[]
}


// **** Functions **** //

/**
 * Fetch the json from the file.
 */
function openDb(): Promise<IDb> {
  return jsonfile.readFile(__dirname + '/' + dbFileName);
}

/**
 * Update the file.
 */
function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + dbFileName), db);
}


// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
