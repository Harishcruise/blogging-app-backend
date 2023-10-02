import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath:'.env',isGlobal: true,}),
  MongooseModule.forRoot(process.env.mongoDBURI),
  UserModule,
  AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
