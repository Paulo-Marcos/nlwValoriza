import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories"

class ListUserService {
  async execute() {
    const userRepositories = getCustomRepository(UsersRepositories)

    const users = await userRepositories.find()

    return classToPlain(users)
  }
}

export { ListUserService }