import { MigrationInterface, QueryRunner } from "typeorm"

export class rolesTable1667565095188 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE user");
        await queryRunner.query("DROP TABLE role");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
