import { Controller,Get, Post, Res, HttpStatus, Body, Logger, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get('')
    getAllUsers(): Promise<User[]>{
        return this.userService.getAllUsers();
    }

    @Get('/:id')
    getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.getUserById(id);
    }
    @Post('')
    createUser(@Body() userDto: UserDto): Promise<User> {
        return this.userService.createUser(userDto);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id:string): Promise<User> {
        return this.userService.deleteUser(id);
    }

    @Put('/:id')
    updateUser(@Param('id') id:string, @Body() userDto: UserDto): Promise<User>{
        return this.userService.updateUser(id, userDto);
    }
}
