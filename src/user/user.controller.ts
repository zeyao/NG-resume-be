import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, Logger } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { CreateUserDTO } from './dto/createUserDTO';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    private logger = new Logger('UserController');

    constructor(private userService: UserService) {       
    }

    //http://localhost:3000/user/createUser
    @Post('/createUser')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDTO: CreateUserDTO) {
        const user : User = new User()
        user.name = createUserDTO.name
        user.email = createUserDTO.email
        user.password = createUserDTO.password
        this.logger.log(`Create user :  ${user}`)
        return this.userService.createUser(user);
    }
    
    



}
