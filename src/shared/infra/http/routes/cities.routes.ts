import { Router } from 'express';
import { GetCityByNameController } from 'src/modules/cities/useCases/GetCityByName/GetCityByNameController';
import { container } from 'tsyringe';

import { CreateCityController } from '../../../../modules/cities/useCases/CreateCity/CreateCityController';
// Instance of cities Router
const cityRouter = Router();

// Dependency resolver for the controllers
const createCityController = container.resolve(CreateCityController);
const getCityByNameController = container.resolve(GetCityByNameController);

// REST verbs operations
cityRouter.get('/', getCityByNameController.handle);
cityRouter.post('/', createCityController.handle);

export { cityRouter };
