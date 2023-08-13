import path from 'path';
import dotenv from 'dotenv';
import commandLineArgs from 'command-line-args';

const options = commandLineArgs([
  {
    name: 'env',
    alias: 'e',
    defaultValue: 'development',
    type: String,
  },
]);

const result2 = dotenv.config({
  path: path.join(__dirname, `../env/${String(options.env)}.env`),
});

if (result2.error) {
  throw result2.error;
}
