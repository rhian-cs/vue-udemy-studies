function randomValueFromRange([min, max]) {
  rangeScale = max - min;

  return Math.round(Math.random() * rangeScale) + min;
}

new Vue({
  el: "#app",
  data: {
    entities: {
      player: {
        name: "Player",
        health: 100,
        skillRanges: {
          attack: [-6, -9],
          specialAttack: [-8, -13],
          heal: [6, 16],
        },
        color: "#4455c2",
      },
      enemy: {
        name: "Enemy",
        health: 100,
        skillRanges: {
          attack: [-9, -11],
        },
        color: "#c24455",
      },
    },
    logs: [],
    logCount: 0,
    gameState: "stopped",
  },
  methods: {
    triggerAction(playerAction, playerActionTarget) {
      this.applyAction(this.entities.player, playerAction, playerActionTarget);
      this.applyAction(this.entities.enemy, "attack", this.entities.player);
    },

    isGameState(state) {
      return this.gameState === state;
    },

    isGameFinished(state) {
      return this.isGameState("victory") || this.isGameState("defeat");
    },

    applyAction(actor, action, target) {
      range = actor.skillRanges[action];
      skillValue = randomValueFromRange(range);
      target.health += skillValue;

      if (target.health > 100) {
        skillValue -= target.health - 100;
        target.health = 100;
      } else if (target.health < 0) {
        skillValue += target.health;
        target.health = 0;
      }

      if (target.health == 0) {
        switch (target.name) {
          case "Player":
            this.gameState = "defeat";

            break;
          case "Enemy":
            this.gameState = "victory";

          default:
            break;
        }
      }

      this.updateActionLog(actor, action, target, skillValue);
    },

    startGame() {
      this.gameState = "running";
    },

    stopGame() {
      this.entities.player.health = 100;
      this.entities.enemy.health = 100;
      this.logs = [];
      this.gameState = "stopped";
    },

    updateActionLog(actor, ...args) {
      this.logs.push({
        id: this.logCount++,
        message: this.actionMessage(actor, ...args),
        color: actor.color,
      });
    },

    actionMessage(actor, action, target, skillValue) {
      if (skillValue < 0) {
        return `${actor.name} strikes ${
          target.name
        }, causing ${-skillValue} damage.`;
      } else {
        return `${actor.name} healed themselves by ${skillValue} points.`;
      }
    },
  },
});
