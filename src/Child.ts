import { Entity } from "./Entity"
import { Build } from "./Build"

export class Child extends Entity {
	public command: string
	public machineAddress: string
	public machinePort: string
	public isJob: boolean
	public isTerminated: boolean
	public build: Build
	public startedAt: Date

	constructor(
		id: number,
		command: string,
		machineAddress: string,
		machinePort: string,
		isJob: boolean,
		isTerminated: boolean,
		build: Build,
		startedAt: Date
	) {
		super(id)
		this.command = command
		this.machineAddress = machineAddress
		this.machinePort = machinePort
		this.isJob = isJob
		this.isTerminated = isTerminated
		this.build = build
		this.startedAt = startedAt
	}

	public serialize() {
		return {
			id: this.id,
			machineAddress: this.machineAddress,
			machinePort: this.machinePort,
			isJob: this.isJob,
			isTerminated: this.isTerminated,
			build: this.build.serialize(),
			startedAt: this.startedAt.getTime()
		}
	}
}
