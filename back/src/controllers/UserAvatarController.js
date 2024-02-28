const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

const Users = knex("users");

class UserAvatarController {
  // index - get
  // show - get
  // create - post
  // update - put
  // delete - delete

  async update(request, response) {
    const user_id = request.user.id;
    const avatarFileName = request.file.filename;

    const diskStorage = new DiskStorage();
    const [user] = await Users.where({ id: user_id });

    if (!user) {
      throw new AppError(
        "Somente usuários autenticados podem mudar o avatar!",
        401
      );
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFileName);
    user.avatar = filename;

    await Users.update(user).where({ id: user_id });

    return response.json(user);
  }
}

module.exports = UserAvatarController;
