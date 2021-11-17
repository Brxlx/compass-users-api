import { Router } from 'express';
import { container } from 'tsyringe';

import { CreateCityController } from '../../../../modules/cities/useCases/CreateCity/CreateCityController';
import { GetCityByNameController } from '../../../../modules/cities/useCases/GetCityByName/GetCityByNameController';
import { GetCityByState } from '../../../../modules/cities/useCases/GetCityByState/GetCityByStateController';

// Instance of cities Router
const cityRouter = Router();

// Dependency resolver for the controllers
const createCityController = container.resolve(CreateCityController);
const getCityByNameController = container.resolve(GetCityByNameController);
const getCityByStateController = container.resolve(GetCityByState);

// REST verbs operations
cityRouter.get('/name/:name', getCityByNameController.handle);
cityRouter.get('/state/:state', getCityByStateController.handle);
cityRouter.post('/', createCityController.handle);

export { cityRouter };
