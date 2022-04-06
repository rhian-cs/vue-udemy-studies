<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  //   props: ["nome"],
  props: {
    // nome: [String, Array],
    nome: {
      type: String,
      //   required: true,
      default: "Anônimo",
      //   default: function() {
      //     return Array(10)
      //       .fill(0)
      //       .join(",");
      //   },
    },
    reiniciarFn: Function,
    idade: Number,
  },
  //   data() {
  //       return {
  //           nome: ''
  //       }
  //   }
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      const antigoNome = this.nome;
      this.nome = "Pedro";
      //   this.$emit("nomeMudou", this.nome);
      this.$emit("nomeMudou", {
        antigoNome,
        novoNome: this.nome,
      });
    },
  },
  created() {
    // barramento.$on("idadeMudou", (idade) => {
    //   this.idade = idade;
    // });
    barramento.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
