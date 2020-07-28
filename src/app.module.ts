import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule,
  MongooseModule.forRoot(`mongodb+srv://Sofia:sofimari1230@cluster0.nssuu.mongodb.net/users?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
