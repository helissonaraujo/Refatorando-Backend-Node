import { v4 as uuidv4 } from "uuid";

class userModels {
  constructor(name, email, password) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = Date();
    this.updatedAt = Date();
    this.isAdmin = Boolean(false);
  }
}

export default userModels;
