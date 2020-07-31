import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UserDto} from './dto/user.dto'

@Injectable()
export class UserService {


    constructor(@InjectModel('User') private userModel: Model<User>) {}


    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find({});
    }

    async getUserById(id: string) {
        let result =  await this.userModel.findById(id);
        Logger.log(result)
        if(!result) throw new NotFoundException('Not found a user with this id');
        return result;
    }

    async createUser(userDto: UserDto): Promise<User> {
        const createdUser =  new this.userModel(userDto);
        return await createdUser.save();
    }

    async deleteUser(id: string): Promise<User> {
        let result =  await this.userModel.findByIdAndDelete(id);
        if (!result) throw new NotFoundException();
        return result;
    }

    async updateUser(id: string, userDto: UserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, userDto);
    }
}
