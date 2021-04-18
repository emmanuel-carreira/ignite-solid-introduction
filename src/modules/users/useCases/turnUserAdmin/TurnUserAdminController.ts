import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = {
      user_id: user_id
    };

    try {
      const userChanged = this.turnUserAdminUseCase.execute(user);
      return response.status(200).json(userChanged).send();
    } catch (error) {
      return response.status(404).json({error: error.message}).send();
    }
  }
}

export { TurnUserAdminController };
