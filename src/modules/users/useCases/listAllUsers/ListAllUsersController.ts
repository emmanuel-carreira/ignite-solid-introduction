import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id  = request.header("user_id");

    const user = {
      user_id: user_id
    };

    try {
      const users = this.listAllUsersUseCase.execute(user);
      return response.status(200).json(users).send();
    } catch (error) {
      return response.status(400).json({error: error.message}).send();
    }
  }
}

export { ListAllUsersController };
