import {MigrationInterface, QueryRunner} from "typeorm";

export class work1619963652299 implements MigrationInterface {
    name = 'work1619963652299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "work" DROP COLUMN "designations"`);
        await queryRunner.query(`ALTER TABLE "work" DROP COLUMN "startDate"`);
        await queryRunner.query(`ALTER TABLE "work" DROP COLUMN "endDate"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "work" ADD "endDate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "work" ADD "startDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "work" ADD "designations" character varying NOT NULL`);
    }

}
