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
          attack: [-7, -10],
          specialAttack: [-9, -12],
          heal: [8, 12],
        },
        color: "#4455c2",
      },
      enemy: {
        name: "Enemy",
        health: 100,
        skillRanges: {
          attack: [-7, -10],
          specialAttack: [-9, -12],
        },
        color: "#c24455",
      },
    },
    logs: [],
    logCount: 0,
  },
  methods: {
    triggerAction(playerAction, playerActionTarget) {
      this.gameState = "midTurn";

      this.applyAction(this.entities.player, playerAction, playerActionTarget);
      this.applyAction(this.entities.enemy, "attack", this.entities.player);

      this.gameState = "playerReady";
    },

    isGameState(state) {
      this.gameState === state;
    },

    applyAction(actor, action, target) {
      range = actor.skillRanges[action];
      skillValue = randomValueFromRange(range);
      target.health += skillValue;
      this.updateActionLog(actor, action, target, skillValue);
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
