import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1627477872655 implements MigrationInterface {
    name = 'migration1627477872655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`userClassification` varchar(36) NOT NULL, `eMail` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `name` text NOT NULL, `developOption` varchar(255) NOT NULL, `projectsID` text NOT NULL, PRIMARY KEY (`userClassification`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`");
    }

}
