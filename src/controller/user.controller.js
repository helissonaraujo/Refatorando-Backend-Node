import userServices from "../services/user.services";
class userController {
  static async getAllUsers(req, res) {
    const user = await userServices.getAllUsers();
    return res.status(200).json(user);
  }

  static async createUser(req, res) {
    const user = req.body;
    const newUser = await userServices.createUser(user);
    return res.status(201).json(newUser);
  }

  static async getUserById(req, res) {
    const id = req.params.id;
    const user = await userServices.getUserById(id);
    return res.status(200).json(user);
  }

  static async updateUser(req, res) {
    const id = req.params.id;
    const user = req.body;
    const token = req.headers.authorization;
    const updatedUser = await userServices.updateUser(id, user);
    return res.status(200).json(updatedUser);
  }

  static async deleteUser(req, res) {
    const id = req.params.id;
    const user = await userServices.deleteUser(id);
    return res.status(200).json(user);
  }
}

export default userController;
