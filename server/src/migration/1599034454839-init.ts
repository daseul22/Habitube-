import {MigrationInterface, QueryRunner} from "typeorm";

export class init1599034454839 implements MigrationInterface {
    name = 'init1599034454839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `keyword` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `todobox` (`id` int NOT NULL AUTO_INCREMENT, `memoTitle` varchar(255) NOT NULL, `memoContents` varchar(255) NOT NULL, `youtubeInfo` json NOT NULL, `isComplete` tinyint NOT NULL DEFAULT 0, `date` varchar(255) NOT NULL, `userId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `todobox` ADD CONSTRAINT `FK_270e876809538bd41c61be8c85c` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `todobox` DROP FOREIGN KEY `FK_270e876809538bd41c61be8c85c`");
        await queryRunner.query("DROP TABLE `todobox`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
