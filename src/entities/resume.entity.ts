import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Resume extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    email : string;

    @Column()
    phone : string;

    @Column({nullable: true})
    leftDetail: string
    
    @Column({nullable: true})
    rightDetail: string

    @Column({nullable: true})
    profile : string

    @Column({type : 'text', array: true, nullable : true})
    competencies : string[]

    @ManyToOne(() => User, (user) => user.id)
    user : User

    @CreateDateColumn()
    createDate : Date;

}