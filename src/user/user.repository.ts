import { User } from "src/entities/user.entity";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async createUser(user : User) : Promise<User> {
        await user.save();
        return user;
    }

}