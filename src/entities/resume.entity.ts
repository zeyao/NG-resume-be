import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { AwardAndCertification } from "./award.entity";
import { Education } from "./education.entity";
import { User } from "./user.entity";
import { Work } from "./work.entity";

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

    @OneToMany(() => Work, (work) => work.id)
    works : Work[];

    @OneToMany(() => Education, (e) => e.id)
    educations : Education[];

    @OneToMany(() => AwardAndCertification, (a) => a.id)
    awardAndCertifications : AwardAndCertification[];

    @CreateDateColumn()
    createDate : Date;

}