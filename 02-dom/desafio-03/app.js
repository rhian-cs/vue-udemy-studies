const IDEAL_VALUE = 37;

new Vue({
  el: "#desafio",
  data: {
    value: 0,
  },
  computed: {
    result() {
      return this.isIdealValue() ? "Valor igual!" : "Valor diferente!";
    },
  },
  watch: {
    value() {
      if (!this.isIdealValue()) return;

      setTimeout(this.resetValue, 5000);
    },
  },
  methods: {
    isIdealValue() {
      return this.value === IDEAL_VALUE;
    },
    resetValue() {
      this.value = 0;
    },
  },
});
