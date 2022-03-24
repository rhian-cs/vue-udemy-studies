new Vue({
  el: "#desafio",
  data: {
    effectInterval: null,
    effectClass: "",
    userClass: "",
    userBooleanClass: "",
    showUserBooleanClass: false,
    userColor: "gray",
    progressInterval: null,
    progressValue: 0,
  },
  methods: {
    startEffect() {
      if (this.effectInterval) return;

      const that = this;
      this.effectInterval = setInterval(() => {
        that.effectClass =
          that.effectClass == "reduced" ? "highlight" : "reduced";
      }, 1000);
    },
    startProgress() {
      this.progressValue = 0;
      if (this.progressInterval) {
        return;
      }

      this.progressInterval = setInterval(() => {
        this.progressValue += 0.2;
        if (this.progressValue >= 100) {
          clearInterval(this.progressInterval);
          this.progressInterval = null;
        }
      }, 10);
    },
  },
});
