import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Personal from "./Personal";

@Entity('alumni')
class Alumni {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100, nullable: false })
    name: string;

    @Column('varchar', { length: 100, nullable: false })
    email: string

    @ManyToOne(() => Personal, (personal) => personal.id)
    personal: number;
}

export default Alumni;
