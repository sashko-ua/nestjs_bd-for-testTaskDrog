import { Module } from '@nestjs/common';

import { PhotoModule } from './../photo/photo.module';
import { PhotoService } from './../photo/photo.service';
import { PhotoController } from './../photo/photo.controller';

@Module({
    // imports: [PhotoModule],
    // providers: [PhotoService],
    // controllers: [PhotoController]
})
export class PhotoHttpModule { }
