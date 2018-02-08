import { Entity } from "./Entity"

export class Process extends Entity {
	public name: string
	public command: string
	public targetQuantity: number

	constructor(
		id: number,
		name: string,
		command: string,
		targetQuantity: number
	) {
		super(id)
		this.name = name
		this.command = command
		this.targetQuantity = targetQuantity
	}

	public serialize() {
		return {
			id: this.id,
			name: this.name,
			command: this.command,
			targetQuantity: this.targetQuantity
		}
	}

	public static deserialize(data: any): Process {
		return new Process(data.id, data.name, data.command, data.targetQuantity)
	}
}
