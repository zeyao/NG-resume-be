import {MigrationInterface, QueryRunner} from "typeorm";

export class createEntities1617294022692 implements MigrationInterface {
    name = 'createEntities1617294022692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "education" ("id" SERIAL NOT NULL, "institution" character varying NOT NULL, "qualification" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP, "honorsAndGrade" character varying, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "resumeId" integer, CONSTRAINT "PK_bf3d38701b3030a8ad634d43bd6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "work" ("id" SERIAL NOT NULL, "company" character varying NOT NULL, "location" character varying NOT NULL, "designations" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP, "descriptions" text array NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "resumeId" integer, CONSTRAINT "PK_1ad2a9dfd058d66c37e6d495222" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "resume" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "leftDetail" character varying, "rightDetail" character varying, "profile" character varying, "competencies" text array, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_7ff05ea7599e13fac01ac812e48" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "award_and_certification" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "acquiredDate" TIMESTAMP NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "resumeId" integer, CONSTRAINT "PK_f05e3a2a7f5ff8ceba0b8ef428f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "education" ADD CONSTRAINT "FK_0f65a811d17b239cbcd6afdcc58" FOREIGN KEY ("resumeId") REFERENCES "resume"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "work" ADD CONSTRAINT "FK_ea2116de1688892ea88dbbdc951" FOREIGN KEY ("resumeId") REFERENCES "resume"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resume" ADD CONSTRAINT "FK_6543e24d4d8714017acd1a1b392" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "award_and_certification" ADD CONSTRAINT "FK_9ca9137da0aaef7cf95ca7a1b59" FOREIGN KEY ("resumeId") REFERENCES "resume"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "award_and_certification" DROP CONSTRAINT "FK_9ca9137da0aaef7cf95ca7a1b59"`);
        await queryRunner.query(`ALTER TABLE "resume" DROP CONSTRAINT "FK_6543e24d4d8714017acd1a1b392"`);
        await queryRunner.query(`ALTER TABLE "work" DROP CONSTRAINT "FK_ea2116de1688892ea88dbbdc951"`);
        await queryRunner.query(`ALTER TABLE "education" DROP CONSTRAINT "FK_0f65a811d17b239cbcd6afdcc58"`);
        await queryRunner.query(`DROP TABLE "award_and_certification"`);
        await queryRunner.query(`DROP TABLE "resume"`);
        await queryRunner.query(`DROP TABLE "work"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "education"`);
    }

}
