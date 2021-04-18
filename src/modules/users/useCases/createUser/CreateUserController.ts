import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    const user = {
      name,
      email
    };

    try {
      const newUser = this.createUserUseCase.execute(user);
      return response.status(201).json(newUser).send();
    } catch (error) {
      return response.status(400).json({error: error.message}).send();
    }

  }
}

export { CreateUserController };
