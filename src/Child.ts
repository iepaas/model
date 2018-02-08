import { Entity } from "./Entity"
import { Build } from "./Build"
import { Process } from "./Process"

export class Child extends Entity {
	public process: Process | null
	public command: string | null
	public machineId: string
	public machineAddress: string
	public machinePort: string
	public isJob: boolean
	public isTerminated: boolean
	public build: Build
	public startedAt: Date

	constructor(
		id: number,
		process: Process | null,
		command: string | null,
		machineId: string,
		machineAddress: string,
		machinePort: string,
		isJob: boolean,
		isTerminated: boolean,
		build: Build,
		startedAt: Date
	) {
		super(id)
		this.process = process
		this.command = command
		this.machineId = machineId
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
			process: this.process && this.process.serialize(),
			command: this.command,
			machineId: this.machineId,
			machineAddress: this.machineAddress,
			machinePort: this.machinePort,
			isJob: this.isJob,
			isTerminated: this.isTerminated,
			build: this.build.serialize(),
			startedAt: this.startedAt.getTime()
		}
	}

	public static deserialize(data: any): Child {
		return new Child(
			data.id,
			data.process && Process.deserialize(data.process),
			data.command,
			data.machineId,
			data.machineAddress,
			data.machinePort,
			data.isJob,
			data.isTerminated,
			Build.deserialize(data.build),
			new Date(data.startedAt)
		)
	}
}
