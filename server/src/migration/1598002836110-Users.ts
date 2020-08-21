import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1598002836110 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE user RENAME TO uuuu`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE uuuu RENAME TO user');
  }
}
// 모델을 정의하고 migration:generate -n 모델이름 을 해줘서 마이크레이션 등록해준다
