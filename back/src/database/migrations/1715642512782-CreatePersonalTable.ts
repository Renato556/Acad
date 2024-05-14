import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePersonalTable1715642512782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'personal',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        length: '11',
                        isNullable: false
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('personal');
    }
}
