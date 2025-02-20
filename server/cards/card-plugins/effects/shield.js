import EffectCard from './_effect-card'
import {discardCard} from '../../../utils'

class ShieldEffectCard extends EffectCard {
	constructor() {
		super({
			id: 'shield',
			name: 'Shield',
			rarity: 'common',
			description:
				'Protects from the first +10hp damage taken.\n\nDiscard following any damage taken.',
		})
		this.protection = {target: 10, discard: true}
	}
	register(game) {}
}

export default ShieldEffectCard
