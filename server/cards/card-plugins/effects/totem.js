import EffectCard from './_effect-card'
import {discardCard} from '../../../utils'

class TotemEffectCard extends EffectCard {
	constructor() {
		super({
			id: 'totem',
			name: 'Totem',
			rarity: 'ultra_rare',
			description:
				'Player recovers +10hp after being knocked out and remains in battle.\n\nDiscard when applied.',
		})
		this.recoverAmount = 10
	}

	register(game) {
		// attacks
		game.hooks.attack.tap(this.id, (target) => {
			if (target.effectCardId === this.id) {
				target.recovery.push({amount: this.recoverAmount, discardEffect: true})
			}
			return target
		})

		game.hooks.hermitDeath.tap(this.id, (recovery, deathInfo) => {
			const {playerState, row} = deathInfo
			const hasTotem = row.effectCard?.cardId === this.id
			if (!hasTotem) return
			recovery.push({amount: this.recoverAmount, discardEffect: true})
			return recovery
		})
	}
}

export default TotemEffectCard
