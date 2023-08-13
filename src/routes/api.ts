import { Router } from 'express';
import productRoutes from './product-routes';

const apiRouter = Router();
const productRouter = Router();

productRouter.get(productRoutes.paths.get, productRoutes.getAll);

apiRouter.use(productRoutes.paths.basePath, productRouter);

export default apiRouter;
