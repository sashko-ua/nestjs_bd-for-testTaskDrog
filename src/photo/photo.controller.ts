import { Photo } from './photo.interface';
import { Get, Post, Body, Controller } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) { }

    @Get()
    async findAll(): Promise<Photo[]> {
        return this.photoService.findAll();
    }

    @Post()
    async create(@Body() photo: Photo) {
        this.photoService.create(photo);
    }
}