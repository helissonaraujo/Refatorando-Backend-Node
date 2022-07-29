import loginService from "../services/login.services";
import Token from "../services/token.services";

class loginController {
  static async login(req, res) {
    const login = req.body;
    const user = await loginService.login(login);
    const token = await Token.generate(user);
    return res.status(200).json({
      message: "Login successful",
      token: token,
      user: user,
    });
  }
}

export default loginController;
