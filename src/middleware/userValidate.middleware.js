import users from "../database/database";

class validateUser{

    static async validateUser(req, res, next){

        const userValidate = await users.find(user => user.email === req.body.email);
        if(userValidate){
            return res.status(400).json({
                message: "Email not valid"
            });
        }
        next();
    }       
        
}

export default validateUser;