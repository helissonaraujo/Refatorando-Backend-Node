import userModels from '../models/user.models';
import users from '../database/database';
import * as bcrypt from 'bcryptjs';
import bcrypt from 'bcryptjs/dist/bcrypt';

class userServices{

    static async getAllUsers(){
        return users;
    }

    static async createUser(user){
        const data = {
            name: user.name,
            email: user.email,
            password: await bcrypt.hash(user.password, 10),
        }
        const newUser = new userModels(data.name, data.email, data.password);
        users.push(newUser);
        return newUser;
    }

    static async getUserById(id){
        const user = users.find(user => user.id === id);
        return user;
    }

    static async updateUser(id, user){
        const userToUpdate = users.find(user => user.id === id);
        userToUpdate.name = user.name;
        userToUpdate.email = user.email;
        userToUpdate.isAdmin = user.isAdmin;
        userToUpdate.password = await bcrypt.hash(user.password, 10);
        userToUpdate.updatedAt = Date();
        return userToUpdate;
    }

    static async deleteUser(id){
        const userToDelete = users.find(user => user.id === id);

        if(userToDelete){
            users.splice(users.indexOf(userToDelete), 1);
            return "User deleted successfully";  
        }                  
        return "Usuario Não encontrado";
    }
}

export default userServices;