import { Controller,Get, Post, Res, HttpStatus, Body, Logger, Param, Delete, Put, HttpException } from '@nestjs/common';
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
    async getUserById(@Param('id') id: string): Promise<User> {
        try {
            return this.userService.getUserById(id);
        } catch(Exception) {
            throw new HttpException('Exception', HttpStatus.CONFLICT);
        }
    }

    @Post('')
    createUser(@Body() userDto: UserDto): Promise<User> {
        try {
            return this.userService.createUser(userDto);
        } catch(Exception) {
            throw new HttpException('Exception', HttpStatus.CONFLICT);
        }
        
    }

    @Delete('/:id')
    deleteUser(@Param('id') id:string): Promise<User> {
        try {
            return this.userService.deleteUser(id);

        } catch(Exception) {
            throw new HttpException('Exception', HttpStatus.CONFLICT);
        }
    }

    @Put('/:id')
    updateUser(@Param('id') id:string, @Body() userDto: UserDto): Promise<User>{
        try {
            return this.userService.updateUser(id, userDto);

        } catch(Exception) {
            throw new HttpException('Exception', HttpStatus.CONFLICT);
        }
    }
}
