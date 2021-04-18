import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = {
      user_id: user_id
    };

    try {
      const userFind = this.showUserProfileUseCase.execute(user);
      return response.status(200).json(userFind).send();
    } catch (error) {
      return response.status(404).json({error: error.message}).send();
    }
  }
}

export { ShowUserProfileController };
