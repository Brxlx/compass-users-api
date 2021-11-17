import { Router } from 'express';
import { container } from 'tsyringe';

import { CHangeUserNameByIdController } from '../../../../modules/users/useCases/ChangeUserName/ChangeUserNameController';
import { CreateUserController } from '../../../../modules/users/useCases/CreateUser/CreateUserController';
import { DeleteUserByIdController } from '../../../../modules/users/useCases/DeleteUserById/DeleteUserByIdController';
import { GetUserByIdController } from '../../../../modules/users/useCases/GetUserById/GetUserByIdController';
import { GetUserByNameController } from '../../../../modules/users/useCases/GetUserByName/GetUserByNameController';

// Instance of cities Router
const userRouter = Router();

// Dependency resolver for the controllers
const getUserByNameController = container.resolve(GetUserByNameController);
const createUserController = container.resolve(CreateUserController);
const getUserByIdController = container.resolve(GetUserByIdController);
const changeUserNameById = container.resolve(CHangeUserNameByIdController);
const deleteUserByIdController = container.resolve(DeleteUserByIdController);

// REST verbs operations
userRouter.get('/user/fullname/:fullname', getUserByNameController.handle);
userRouter.get('/user/id/:id', getUserByIdController.handle);
userRouter.post('/', createUserController.handle);
userRouter.patch('/user/id/:id', changeUserNameById.handle);
userRouter.delete('/user/id/:id', deleteUserByIdController.handle);

export { userRouter };
