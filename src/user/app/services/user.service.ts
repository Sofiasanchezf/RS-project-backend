import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../domain/interfaces/user.interface';
import { UserDto} from '../../domain/dto/user.dto'

@Injectable()
export class UserService {


    constructor(@InjectModel('User') private userModel: Model<User>) {}


    /**
     * Returns an array of users from mongoDB
     */
    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find({});
    }

    /**
     * Returns the user who has the given id
     * @param id The id of the user
     */
    async getUserById(id: string): Promise<User> {
        let result =  await this.userModel.findById(id);
        if(!result) throw new NotFoundException('Not found a user with this id');
        return result;
    }

    /**
     * Returns the new user created
     * @param userDto UserDto to create
     */
    async createUser(userDto: UserDto): Promise<User> {
        const createdUser =  new this.userModel(userDto);
        return await createdUser.save();
    }

    /**
     * Delete the user who has the given id.
     *  If the user doesn't exist, then throw a Not Found Exception
     * @param id the id of the user
     */
    async deleteUser(id: string): Promise<User> {
        let result =  await this.userModel.findByIdAndDelete(id);
        if (!result) throw new NotFoundException();
        return result;
    }

    /**
     * Update the user who has the given id
     * @param id the id of the user
     * @param userDto  UserDto to update
     */
    async updateUser(id: string, userDto: UserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, userDto);
    }
}
