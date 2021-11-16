import { Router } from 'express';
import { container } from 'tsyringe';

import { GetUserByNameController } from '../../../../modules/users/useCases/GetUserByName/GetUserByNameController';

// Instance of cities Router
const userRouter = Router();

// Dependency resolver for the controllers
const getUserByNameController = container.resolve(GetUserByNameController);

// REST verbs operations
userRouter.get('/user/:fullname', getUserByNameController.handle);
// userRouter.get('/state/:state', getCityByStateController.handle);
// userRouter.post('/', createCityController.handle);

export { userRouter };
