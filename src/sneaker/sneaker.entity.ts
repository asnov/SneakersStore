import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Sneaker {
    @ObjectIdColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    brand: string;
    @Column()
    color: string;
    @Column()
    price: number;
    @Column()
    material: string;
    @Column()
    isInStock: boolean;
}
