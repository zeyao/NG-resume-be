import {MigrationInterface, QueryRunner} from "typeorm";

export class createResume1617197917824 implements MigrationInterface {
    name = 'createResume1617197917824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "resume" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "leftDetail" character varying, "rightDetail" character varying, "profile" character varying, "competencies" text array, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_7ff05ea7599e13fac01ac812e48" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "resume" ADD CONSTRAINT "FK_6543e24d4d8714017acd1a1b392" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resume" DROP CONSTRAINT "FK_6543e24d4d8714017acd1a1b392"`);
        await queryRunner.query(`DROP TABLE "resume"`);
    }

}
