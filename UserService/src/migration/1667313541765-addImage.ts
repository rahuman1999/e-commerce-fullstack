import { MigrationInterface, QueryRunner } from "typeorm";

export class addImage1667313541765 implements MigrationInterface {
  name = "addImage1667313541765";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `user` ADD COLUMN `image` varchar(255)"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `user` DROP COLUMN `image`");
  }
}
