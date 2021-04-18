import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User(name, email);

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => {
      if (user.id === id){
        return user;
      }
    })
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => {
      if (user.email === email){
        return user;
      }
    })
  }

  turnAdmin(receivedUser: User): User {
    let userUpdated;
    this.users.map((user) => {
      if(user.id === receivedUser.id){
        user.admin = true;
        userUpdated = user;
      }
      return user;
    })
    return userUpdated;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
