import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Resume } from "./resume.entity";

@Entity()
export class AwardAndCertification extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    acquiredDate: Date;

    @CreateDateColumn()
    createDate : Date;

    @ManyToOne(() => Resume, (resume) => resume.id)
    resume : Resume
}