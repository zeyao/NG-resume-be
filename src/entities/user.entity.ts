import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    email : string;

    @Column()
    password : string;

    @CreateDateColumn()
    createDate : Date;

}