import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo/photo.entity';
import { PhotoController } from './photo/photo.controller';
import { PhotoService } from './photo/photo.service';

import { PhotoModule } from './photo/photo.module';
// import { PhotoHttpModule } from './photo-http/photo-http.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    username: 'postgres',
    password: '1111567',
    port: 5432,
    host: '127.0.0.1',
    database: 'photo_bd',
    synchronize: true,
    entities: [],
    autoLoadEntities: true
  }), PhotoModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
