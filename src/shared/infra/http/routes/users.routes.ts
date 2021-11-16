import { Router } from 'express';
import { CreateUserController } from 'src/modules/users/useCases/CreateUser/CreateUserController';
import { container } from 'tsyringe';

import { GetUserByNameController } from '../../../../modules/users/useCases/GetUserByName/GetUserByNameController';

// Instance of cities Router
const userRouter = Router();

// Dependency resolver for the controllers
const getUserByNameController = container.resolve(GetUserByNameController);
const createUserController = container.resolve(CreateUserController);
// REST verbs operations
userRouter.get('/user/:fullname', getUserByNameController.handle);
// userRouter.get('/state/:state', getCityByStateController.handle);
userRouter.post('/', createUserController.handle);

export { userRouter };
