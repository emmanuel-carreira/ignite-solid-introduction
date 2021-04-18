import { v4 as uuidV4 } from "uuid";


class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(name?:string, email?: string, created_at?: Date, updated_at?: Date) {
    this.id = uuidV4();
    this.admin = false;
    this.name = name || null;
    this.email = email || null;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
  }
}

export { User };
