import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Project {
	@PrimaryGeneratedColumn('uuid')
	classification: string;

	@UpdateDateColumn({type: "timestamp"})
	updatedDate: Date

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	image: string;

	@Column("simple-array")
	teamsMember: string[];

	@Column("simple-array")
	teamsRole: string[];
}