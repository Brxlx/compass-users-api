import { Router } from 'express';
import { container } from 'tsyringe';

import { CreateCityController } from '../../../../modules/cities/useCases/CreateCity/CreateCityController';

// Instance of cities Router
const cityRouter = Router();

// Dependency resolver for the controllers
const createCityController = container.resolve(CreateCityController);

cityRouter.post('/', createCityController.handle);

export { cityRouter };
