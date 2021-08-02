import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1627816646624 implements MigrationInterface {
    name = 'migration1627816646624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `project` ADD `updatedDate` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `project` DROP COLUMN `updatedDate`");
    }

}
