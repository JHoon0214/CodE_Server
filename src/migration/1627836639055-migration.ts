import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1627836639055 implements MigrationInterface {
    name = 'migration1627836639055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `project` DROP COLUMN `teams`");
        await queryRunner.query("ALTER TABLE `project` ADD `teamsMember` text NOT NULL");
        await queryRunner.query("ALTER TABLE `project` ADD `teamsRole` text NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `project` DROP COLUMN `teamsRole`");
        await queryRunner.query("ALTER TABLE `project` DROP COLUMN `teamsMember`");
        await queryRunner.query("ALTER TABLE `project` ADD `teams` text NOT NULL");
    }

}
