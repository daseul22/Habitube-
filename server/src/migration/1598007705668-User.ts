import {MigrationInterface, QueryRunner} from "typeorm";

export class User1598007705668 implements MigrationInterface {
    name = 'User1598007705668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `age` `agee` int NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `agee` `age` int NOT NULL");
    }

}
