import { Router } from 'express';
import { CreateUserController } from 'src/modules/users/useCases/CreateUser/CreateUserController';
import { GetUserByIdController } from 'src/modules/users/useCases/GetUserById/GetUserByIdController';
import { container } from 'tsyringe';

import { GetUserByNameController } from '../../../../modules/users/useCases/GetUserByName/GetUserByNameController';

// Instance of cities Router
const userRouter = Router();

// Dependency resolver for the controllers
const getUserByNameController = container.resolve(GetUserByNameController);
const createUserController = container.resolve(CreateUserController);
const getUserByIdController = container.resolve(GetUserByIdController);

// REST verbs operations
userRouter.get('/user/fullname/:fullname', getUserByNameController.handle);
userRouter.get('/user/id/:id', getUserByIdController.handle);
userRouter.post('/', createUserController.handle);

export { userRouter };
