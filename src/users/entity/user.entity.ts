import { Reports } from './../../reports/entity/reports.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Reports, (reports)=> reports.user, {
        cascade: true,
    })
    reports: Reports[];

}