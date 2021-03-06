import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
    private readonly photo: Photo[] = [];
    constructor(
        @InjectRepository(Photo)
        private photosRepository: Repository<Photo>,
        private connection: Connection
    ) { }

    // findAll(): Promise<Photo[]> {
    //     return this.photosRepository.find();
    // }

    findAll(): Photo[] {
        return this.photo;
    }

    findOne(id: string): Promise<Photo> {
        return this.photosRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.photosRepository.delete(id);
    }

    async createMany(photos: Photo[]) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save('lol');
            await queryRunner.manager.save('hi');

            await queryRunner.commitTransaction();
        } catch (err) {
            // since we have errors lets rollback the changes we made
            await queryRunner.rollbackTransaction();
        } finally {
            // you need to release a queryRunner which was manually instantiated
            await queryRunner.release();
        }
    }

    create(photo: Photo) {
        this.photo.push(photo);
    }
}

// @Injectable()
// export class PhotoService {
//     private readonly items: string[] = ['Pizza', 'Coke'];

//     findAll(): string[] {
//         return this.items;
//     }

//     create(item: string) {
//         this.items.push(item);
//     }
// }