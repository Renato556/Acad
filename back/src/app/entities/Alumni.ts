import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('alumni')
class Alumni {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100, nullable: false })
    name: string;

    @Column('varchar', { length: 100, nullable: false })
    email: string

    @Column('int', { nullable: false })
    personal_id: number;
}

export default Alumni;
