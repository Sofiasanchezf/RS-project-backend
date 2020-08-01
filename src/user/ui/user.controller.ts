import { Controller,Get, Post, Res, HttpStatus, Body, Logger, Param, Delete, Put, HttpException } from '@nestjs/common';
import { UserService } from '../app/services/user.service';
import { UserDto } from '../domain/dto/user.dto';
import { User } from '../domain/interfaces/user.interface';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    /**
     * Returns all users
     */
    @Get('')
    getAllUsers(): Promise<User[]>{
        return this.userService.getAllUsers();
    }

    /**
     * Returns the user who has the given id
     * @param id the id of the user
     */
    @Get('/:id')
    async getUserById(@Param('id') id: string): Promise<User> {
        try {
            return this.userService.getUserById(id);
        } catch(Exception) {
            throw new HttpException('Exception', HttpStatus.CONFLICT);
        }
    }

    /**
     * Returns the new user created
     * @param userDto UserDto to create
     */
    @Post('')
    createUser(@Body() userDto: UserDto): Promise<User> {
        try {
            return this.userService.createUser(userDto);
        } catch(Exception) {
            throw new HttpException('Exception', HttpStatus.CONFLICT);
        }
        
    }

    /**
     * Delete the user who has the given id.
     *  If the user doesn't exist, then throw a Not Found Exception
     * @param id the id of the user
     */
    @Delete('/:id')
    deleteUser(@Param('id') id:string): Promise<User> {
        try {
            return this.userService.deleteUser(id);

        } catch(Exception) {
            throw new HttpException('Exception', HttpStatus.CONFLICT);
        }
    }

    /**
     * Update the user who has the given id
     * @param id the id of the user
     * @param userDto  UserDto to update
     */
    @Put('/:id')
    updateUser(@Param('id') id:string, @Body() userDto: UserDto): Promise<User>{
        try {
            return this.userService.updateUser(id, userDto);

        } catch(Exception) {
            throw new HttpException('Exception', HttpStatus.CONFLICT);
        }
    }
}
