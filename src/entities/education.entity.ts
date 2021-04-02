import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Resume } from "./resume.entity";

/**
 * TODO We could do a master data of institution pool and allow do a lookup
 */

@Entity()
export class Education extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    institution : string;

    @Column()
    qualification : string;

    @Column()
    startDate : Date

    @Column({nullable : true})
    endDate : Date

    @Column({nullable : true})
    honorsAndGrade: string

    @ManyToOne(() => Resume, (resume) => resume.id)
    resume : Resume

    @CreateDateColumn()
    createDate : Date;

}