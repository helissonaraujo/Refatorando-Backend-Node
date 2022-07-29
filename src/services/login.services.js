import users from '../database/database';

class loginService{

    static async login(login){
        const userLogin = users.find(user => user.email === login.email && user.password === login.password);
        if(!userLogin){
            return "user not found";
        }
        const user = {
            id: userLogin.id,
            name: userLogin.name,
            email: userLogin.email,
            createdAt: userLogin.createdAt,
            updatedAt: userLogin.updatedAt,
            isAdmin: userLogin.isAdmin
        }
        return user;
    }
}

export default loginService;