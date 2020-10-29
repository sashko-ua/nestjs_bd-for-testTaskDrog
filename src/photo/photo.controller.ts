import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { Get, Post, Body, Controller } from '@nestjs/common';
@Controller('photo')
export class PhotoController {
    constructor(private readonly photosService: PhotoService) { }

    @Get()
    async findAll(): Promise<Photo[]> {
        return this.photosService.findAll();
    }

    @Post()
    async create(@Body() photo: Photo) {
        this.photosService.create(photo);
    }
}