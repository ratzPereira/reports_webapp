import { report } from 'process';
import { User } from "src/users/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(()=> User, (user) => user.reports)
    user: User;
}