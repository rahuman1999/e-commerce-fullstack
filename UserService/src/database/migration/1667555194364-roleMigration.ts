import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class roleMigration1667555194364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "role",
      new TableColumn({
        name: "acess",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
