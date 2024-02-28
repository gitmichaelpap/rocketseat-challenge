const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const knex = require("../database/knex");

const Users = knex("users");

class UsersController {
  // index - get
  // show - get
  // create - post
  // update - put
  // delete - delete

  async create(request, response) {
    const { name, email, password } = request.body;

    const [checkUserExists] = await Users.where({ email });

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    const user = {
      name,
      email,
      password,
    };

    const hashedPassword = await hash(password, 8);
    user.password = hashedPassword;

    const [id] = await Users.insert(user);

    response.status(201).json({ ...user, id });
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const user_id = request.user.id;

    const [user] = await Users.where({ id: user_id });

    if (!user) {
      throw new AppError(" Usuário não encontrado");
    }

    const [userWithUpdatedEmail] = await Users.where({ email });

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError(
        "Você precisa informar a senha antiga, para definir a nova."
      );
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }

      user.password = await hash(password, 8);
    }

    await Users.update(user);

    return response.json();
  }
}

module.exports = UsersController;
