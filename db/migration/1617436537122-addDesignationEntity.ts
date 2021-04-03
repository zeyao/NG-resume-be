import {MigrationInterface, QueryRunner} from "typeorm";

export class addDesignationEntity1617436537122 implements MigrationInterface {
    name = 'addDesignationEntity1617436537122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "designation" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP, "descriptions" text array NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "workId" integer, CONSTRAINT "PK_8c84a3c335a852ff2d426cb0112" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "designation" ADD CONSTRAINT "FK_d7113305603e06c3dc8473093a3" FOREIGN KEY ("workId") REFERENCES "work"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "designation" DROP CONSTRAINT "FK_d7113305603e06c3dc8473093a3"`);
        await queryRunner.query(`DROP TABLE "designation"`);
    }

}
