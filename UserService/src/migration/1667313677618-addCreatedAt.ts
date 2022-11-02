import { MigrationInterface, QueryRunner } from "typeorm";

export class addCreatedAt1667313677618 implements MigrationInterface {
  name = "addCreatedAt1667313677618";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `user` ADD COLUMN `createdAt` timestamp"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `user` DROP COLUMN `image`");
  }
}
