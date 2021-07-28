import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
	@PrimaryGeneratedColumn('uuid')
	userClassification: string;

	@Column()
	eMail: string;

	@Column()
	password: string;

	@Column("simple-json")
	name: {firstName: string, lastName: string};

	@Column()
	developOption: string;

	@Column("simple-array")
	projectsID: string[];
}