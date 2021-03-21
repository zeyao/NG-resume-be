import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserRepository)
        private userReository : UserRepository,
    ) {  

    }
    async createUser(user: User) : Promise<User> {
        return this.userReository.createUser(user);
    }
}
