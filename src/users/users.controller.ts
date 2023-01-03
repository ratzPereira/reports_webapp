import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users/auth')
export class UsersController {

    constructor(private userService: UsersService){

    }

    @Post('/signup')
    createuser(@Body() body: UserDto){
       return this.userService.createUser(body)   
    }

    @Get('/:id')
    findUser(){

    }

    @Get()
    findAllUsers(@Param() email: string){

    }

    @Patch('/:id')
    updateUser(body: UserDto){

    }

    @Delete('/:id')
    deleteUser(){
        
    }
}
