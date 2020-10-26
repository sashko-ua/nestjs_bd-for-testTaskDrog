// import { Photo } from './photo.entity';
import { Injectable } from '@nestjs/common';
import { Photo } from './photo.interface';

@Injectable()
export class PhotoService {
    private readonly photo: Photo[] = [];

    findAll(): Photo[] {
        return this.photo;
    }

    create(photo: Photo) {
        this.photo.push(photo);
    }
}


