import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath:'.env',isGlobal: true,}),
  MongooseModule.forRoot(process.env.mongoDBURI),
  UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
