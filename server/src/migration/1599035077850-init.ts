import {MigrationInterface, QueryRunner} from "typeorm";

export class init1599035077850 implements MigrationInterface {
    name = 'init1599035077850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `todobox` DROP COLUMN `youtubeInfo`");
        await queryRunner.query("ALTER TABLE `todobox` ADD `youtubeInfo` text NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `todobox` DROP COLUMN `youtubeInfo`");
        await queryRunner.query("ALTER TABLE `todobox` ADD `youtubeInfo` json NOT NULL");
    }

}
