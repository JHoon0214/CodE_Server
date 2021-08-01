import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1627811221409 implements MigrationInterface {
    name = 'migration1627811221409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `project` (`classification` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `image` varchar(255) NOT NULL, `teams` text NOT NULL, PRIMARY KEY (`classification`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `project`");
    }

}
