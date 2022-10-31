import { MigrationInterface, QueryRunner } from "typeorm";

export class userMigration1666964409606 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ecommuser_dev.user ADD COLUMN price int`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
