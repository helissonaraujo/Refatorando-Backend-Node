import Token from "../services/token.services";

class verifyToken {
  static async verify(req, res, next) {
    const token = req.headers.authorization;
    const decoded = await Token.verify(token);
    if (decoded) {
      next();
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  }
}

export default verifyToken;
