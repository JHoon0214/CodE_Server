import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PreTesting {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string
}