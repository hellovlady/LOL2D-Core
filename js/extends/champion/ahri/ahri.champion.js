import ChampionCore from "../../../core/champion.core.js";
import AhriBasicAttack from "./ability/ahri.basic-attack.ability.js";
import OrbOfDeception from "./ability/orb-of-deception.ability.js";
import FoxFire from "./ability/fox-fire.ability.js";
import Charm from "./ability/charm.ability.js";
import SpriritRush from "./ability/spririt-rush.ability.js";

export default class Ahri extends ChampionCore {
    constructor(config = {}) {
        super(config);

        this.avatarCirclePath =
            "asset/image/champion/ahri/Ahri.avatar.circle.png";

        this.maxHealth = 500;

        this.abilities = {
            basicAttack: new AhriBasicAttack({ owner: this }),

            spell1: new OrbOfDeception({ owner: this }),
            spell2: new FoxFire({ owner: this }),
            spell3: new Charm({ owner: this }),
            spell4: new SpriritRush({ owner: this }),

            avatarSpell1: null,
            avatarSpell2: null,
        };
    }
}
