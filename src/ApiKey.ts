import { Entity } from "./Entity"

export class ApiKey extends Entity {
	public label: string
	public value: string
	public fragment: string
	public lastUsed: Date

	constructor(
		id: number,
		label: string,
		value: string,
		fragment: string,
		lastUsed: Date
	) {
		super(id)
		this.label = label
		this.value = value
		this.fragment = fragment
		this.lastUsed = lastUsed
	}

	public serialize() {
		return {
			label: this.label,
			fragment: this.fragment,
			lastUsed: this.lastUsed.getTime()
		}
	}
}
