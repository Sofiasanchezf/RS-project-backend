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
        if(!result) throw new NotFoundException();
        return result;
    }

    async createUser(userDto: UserDto): Promise<User> {
        Logger.log(userDto);
        const createdUser =  new this.userModel(userDto);
        Logger.log(createdUser)
        return await createdUser.save();
    }

    async deleteUser(id: string): Promise<User> {
        return await this.userModel.findByIdAndDelete(id);
    }

    async updateUser(id: string, userDto: UserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, userDto, {new: true});
    }
}
