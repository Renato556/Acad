import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// table name
@Entity('personal')
class Personal {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column('varchar', { length: 100, nullable: false })
    name: string;

    @Column('varchar', { length: 100, nullable: false })
    phone: string;
}

export default Personal;
