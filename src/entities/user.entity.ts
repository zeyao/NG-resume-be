import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Resume } from "./resume.entity";

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

    @OneToMany(() => Resume, (resume) => resume.id)
    resumes : Resume[];


}