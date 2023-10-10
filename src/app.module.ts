import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { BlogPostModule } from './blog-post/blog-post.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath:'.env',isGlobal: true,}),
  MongooseModule.forRoot(process.env.mongoDBURI),
  UserModule,
  AuthModule,
  BlogPostModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
