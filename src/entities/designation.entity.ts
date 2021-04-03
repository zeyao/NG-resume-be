import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Work } from "./work.entity";


@Entity()
export class Designation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title : string;

    @Column()
    startDate : Date;

    @Column({nullable:true})
    endDate : Date;
    
    @Column({type : 'text', array: true})
    descriptions: string[]

    @ManyToOne(() => Work, (w) => w.id)
    work : Work

    @CreateDateColumn()
    createDate : Date;

}