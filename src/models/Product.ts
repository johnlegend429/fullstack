import { TAll } from 'jet-validator';


// **** Variables **** //

export enum ProductRoles {
  Standard,
  Admin,
}


// **** Types **** //

export interface IProduct {
  id: number;
  name: string;
  email: string;
  pwdHash?: string;
  role?: ProductRoles;
}


// **** Functions **** //

/**
 * Get a new Product object.
 */
function _new(
  name: string,
  email: string,
  role?: ProductRoles,
  pwdHash?: string,
): IProduct {
  return {
    id: -1,
    email,
    name,
    role: (role ?? ProductRoles.Standard),
    pwdHash: (pwdHash ?? ''),
  };
}

/**
 * Copy a user object.
 */
function copy(user: IProduct): IProduct {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    pwdHash: user.pwdHash,
  };
}

/**
 * See if an object is an instance of Product.
 */
function instanceOf(arg: TAll): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg &&
    'email' in arg &&
    'name' in arg &&
    'role' in arg
  );
}


// **** Export default **** //

export default {
  new: _new,
  copy,
  instanceOf,
} as const;
