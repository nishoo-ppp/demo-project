import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    empid: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    phone: string;
}
