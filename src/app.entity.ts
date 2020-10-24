import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Url } from 'url';

@Entity('photo')
export class Photo {
    @PrimaryGeneratedColumn()
    id?: number;
    @CreateDateColumn({ nullable: true })
    url?: Url;
}