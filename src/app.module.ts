import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config'
import { PhotoController } from './photo/photo.controller';
import { PhotoService } from './photo/photo.service';
@Module({
  imports: [TypeOrmModule.forRoot(config)],
  controllers: [AppController, PhotoController],
  providers: [AppService, PhotoService],
})
export class AppModule { }
