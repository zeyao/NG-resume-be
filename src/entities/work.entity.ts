import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Resume } from "./resume.entity";

@Entity()
export class Work extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company : string;

    @Column()
    location : string;

    @Column()
    designations : string;

    @Column()
    startDate : Date

    @Column({nullable : true})
    endDate : Date
    
    @Column({type : 'text', array: true})
    descriptions: string[]

    @ManyToOne(() => Resume, (resume) => resume.id)
    resume : Resume

    @CreateDateColumn()
    createDate : Date;

}