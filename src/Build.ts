import { Entity } from "./Entity"

export class Build extends Entity {
	public commit: string
	public snapshot: string
	public date: Date

	constructor(id: number, commit: string, snapshot: string, date: Date) {
		super(id)
		this.commit = commit
		this.snapshot = snapshot
		this.date = date
	}

	public serialize() {
		return {
			id: this.id,
			commit: this.commit,
			snapshot: this.snapshot,
			date: this.date.getTime()
		}
	}
}
