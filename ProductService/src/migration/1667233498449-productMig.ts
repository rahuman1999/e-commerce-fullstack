import { MigrationInterface, QueryRunner } from "typeorm";

export class productMig1667233498449 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE product ADD productOrder INT NOT NULL AFTER productName"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE product DROP productOrder");
  }
}
