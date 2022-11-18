import { MigrationInterface, QueryRunner } from "typeorm";

export class dropCategory1667568149503 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("drop table product");
    await queryRunner.query("drop table category");
    await queryRunner.query("drop table migration_table")
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}
