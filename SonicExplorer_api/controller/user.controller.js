const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/user');
const userDAO = require('../DAO/user.dao');

const generateToken = (userId, userRol, nombreUser) => {
    const secretKey = 'tu_clave_secreta';
    const tokenPayload = {
        userId,
        role: userRol ,// Agrega el rol del usuario aquí,
        nombre: nombreUser
    };
    const options = {
        expiresIn: '2h' // El token expirará en 2 horas
    };
    const token = jwt.sign(tokenPayload, secretKey, options); //  --- Este es para que sure 2 horas el token 
    // const token = jwt.sign({ userId }, 'tu_clave_secreta', { expiresIn: 60 }); // Como prueba esta este de 60 segundos 
    return token;
};

class UserController {
    constructor(){
        this.userDao = new userDAO();
    };

    async registroAuth(req, res) {
        try {
            const { username, password, email, nombreCompl } = req.body;
            const existingUser = await this.userDao.obtenerUser(username);
            const existingEmail = await this.userDao.obtenerEmail(email);
            if (existingUser) {
              return res.status(400).json({ error: 'El usuario ya existe' });
            }

            if (existingEmail){
                return res.status(200).json({ error: 'El correo ya esta registrado' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const userObj = new User({
                username,
                password: hashedPassword,
                email,
                nombreCompl
            });

            const crear = await this.userDao.crearUsuario(userObj);
            res.status(201).json({ message: 'Usuario registrado con éxito', crear });
          
        } catch (error) {
            res.status(500).json({ error: 'Error al registrar el usuario' });
            console.log(error);
        }
    }

    async loginAuth(req, res){
        try {
            const { username, password } = req.body;
            
            const user = await this.userDao.obtenerUser(username);
            
            if (!user) {
                return res.status(401).json({ error: 'Usuario no existe' });
              }
            
            const passwordMatch = await bcrypt.compare(password, user.password);
        
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Credenciales incorrectas' });
            }

            const token = generateToken(user._id, user.rol, user.nombreCompl);
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Error al iniciar sesión' });
        }
    }

}


module.exports = UserController;
