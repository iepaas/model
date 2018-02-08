import { Entity } from "./Entity"

export class Domain extends Entity {
	public name: string
	public validated: boolean

	constructor(id: number, name: string, validated: boolean) {
		super(id)
		this.name = name
		this.validated = validated
	}

	public serialize() {
		return {
			id: this.id,
			name: this.name,
			validated: this.validated
		}
	}

	public static deserialize(data: any): Domain {
		return new Domain(data.id, data.name, data.validated)
	}
}
