new Vue({
  el: "#desafio",
  data: {
    myValue: "",
  },
  methods: {
    setValue(event) {
      this.myValue = event.target.value;
    },
  },
});
