import jwt from 'jsonwebtoken';

class Token {
  static get secret() {
    return 'eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJ0b2tlbm5vZGUifQ.7Lxkz6-syqezlfIVQCOVlcXi15hrnrQYgBX6XVjuWnI';
  }

  static async generate(data) {
    const userToken = {
      id: data.id,
      isAdmin: data.isAdmin,
    }
    return jwt.sign(userToken, this.secret);
  }

  static async verify(token) {
    return jwt.verify(token, this.secret, (err, decoded) => {
      if (err) {
        return false;
      }
      return decoded;
  });
  }
}

export default Token;