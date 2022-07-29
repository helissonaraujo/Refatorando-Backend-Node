import Token from "../services/token.services";

class verifyAdminUser {
  static async verifyAdmin(req, res, next) {
    const token = req.headers.authorization;
    const { id } = req.params;
    const userToken = await Token.verify(token);
    if (userToken.isAdmin === true) {
      next();
    } else {
      if (userToken.id === id) {
        next();
      } else {
        res.status(401).json({
          message: "You are not authorized to perform this action",
        });
      }
    }
  }
}
export default verifyAdminUser;
