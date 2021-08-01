import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
	@PrimaryGeneratedColumn('uuid')
	classification: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	image: string;

	@Column("simple-array")
	teams: string[];
}