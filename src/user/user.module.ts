import { Module } from '@nestjs/common';
import { UserController } from './ui/user.controller';
import { UserService } from './app/services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'User', schema: userSchema }
    ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
