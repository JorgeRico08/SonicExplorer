const USUARIO = require("../model/user");

class UserDao {
    async obtenerUser(usuario) {
        try {
            const user = await USUARIO.findOne({ username: usuario });
            return user;
        } catch (error) {
            throw new Error('Error al obtener el usuario');
        }
    };

    async obtenerUsuarioID(id) {
        try {
            const user = await USUARIO.findOne(id);
            return user;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener el usuario');
        }
    };

    async crearUsuario(userData) {
        try {
            const user = new USUARIO(userData);
            return await user.save();
        } catch (error) {
            throw new Error('Error al crear el usuario');
        }
    };

    async obtenerEmail(email) {
        try {
            const user = await USUARIO.findOne({ email });
            return user;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener el usuario');
        }
    }
}

module.exports = UserDao;