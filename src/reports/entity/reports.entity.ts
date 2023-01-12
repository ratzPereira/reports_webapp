import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reports {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    longitude: number;

    @Column()
    latitude: number;

    @Column()
    mileage: number;
}