import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Personal from "./Personal";

@Entity('alumni')
class Alumni {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100, nullable: false })
    name: string;

    @Column('varchar', { length: 100, nullable: false })
    email: string

    @Column("int", { nullable: true })
    personalId: number;

    @ManyToOne(() => Personal, (personal) => personal.id)
    @JoinColumn({ name: 'personalId' })
    personal: number;
}

export default Alumni;
