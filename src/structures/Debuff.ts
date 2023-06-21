import { StatusEffects } from './items/Stimulant.js'


export class Debuff<T extends string = string> {
	name: T
	discordIcon: string
	effects: StatusEffects

	constructor (data: Omit<Debuff<T>, 'image'>) {
		this.name = data.name
		this.discordIcon = data.discordIcon
		this.effects = data.effects
	}

	/** get base64 representation of image */
	async image (): Promise<string> {
		return (await import(`../resources/images/debuffs/${this.name}.png`)).default
	}
}
