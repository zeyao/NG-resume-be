import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Designation } from "./designation.entity";
import { Resume } from "./resume.entity";

@Entity()
export class Work extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company : string;

    @Column()
    location : string;
    
    @Column({type : 'text', array: true})
    descriptions: string[]

    @ManyToOne(() => Resume, (resume) => resume.id)
    resume : Resume

    @OneToMany(() => Designation, (d) => d.id)
    designation : Designation[];

    @CreateDateColumn()
    createDate : Date;

}