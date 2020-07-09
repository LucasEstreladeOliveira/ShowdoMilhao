<template>
  <v-row>
    <v-col style="padding-top:0px; padding-right: 0px" cols="4" >
      <v-card tile flat class="main-card"> 
        <v-img src="../../public/JogodomilhaoLogo.png" height="100" contain></v-img>
      </v-card>
      <div class="pergunta-div">
        <v-card class="pergunta-card"> 
          <p class="text-h5">{{ data.perguntas[count].pergunta }}</p>
        </v-card>
        <v-btn :disabled="erro" v-for="r in data.perguntas[count].respostas" v-bind:key="r.label" class="resposta text-h6" width="428" @click="adicionaResposta(r)">
          <p style="margin-left:10px">{{ r.label }}</p>
        </v-btn>
      </div>
      <div class="escolhas">
        <v-card><p>{{ }}</p></v-card>
        <v-card><p></p></v-card>
        <v-card><v-btn @click="parar()">{{ data.perguntas[count].valor }}</v-btn></v-card>
      </div>
    </v-col>
    <v-col style="padding:0px" cols="8" >
      <v-img :src="require('../../public/' + state)" class="image-reaction"></v-img>
    </v-col>
  </v-row>
</template>

<script>
  import dados from "../../public/data.json";
  export default {
    name: 'HelloWorld',
    data() {
      return {
        data: dados,
        count:0,
        state: "",
        erro: false,
        money: 0,
        etapaAnterior: 1,
      }
    },
    created () {
      this.state = "aguardando-resposta.jpeg";
    },
    methods: {
      adicionaResposta(r){
        // Verifica se a resposta está correta ou não
          if(r.certo == true){
            this.state = "resposta-certa.jpeg";
            // Verifica etapa para contabilização do prêmio
              if(this.data.perguntas[this.count].etapa === this.etapaAnterior){
                this.money += this.data.perguntas[this.count].valor;
              }else{
                this.money = this.data.perguntas[this.count].valor;
                this.etapaAnterior = this.data.perguntas[this.count].etapa;
              }
            setTimeout(() => {
              this.state = "aguardando-resposta.jpeg";
              // Verifica se voce acertou todas as perguntas ou não
                if(this.data.perguntas.length == this.count + 1){
                  setTimeout(() => {
                    this.$router.push("/win");
                  })
                }else{
                  this.count++;       
                }
            }, 1000)
          }else{
            this.state = "resposta-errada.jpeg";
            this.erro = true;
            setTimeout(() => {
                this.$router.push('/');   
            }, 1000); 
          }

      },
      parar(){
        this.$emit('score', this.money);
        this.$router.push('/score');
  
      },
    },
  }
</script>
<style scoped>
.main-card{
  background-color: blue !important;
  height: 100vh;
  width:36vw;
  padding-top: 70px
}
.pergunta-div{
  position: relative;
  bottom: 70vh !important;
}
.pergunta-card{
  width: 500px;
  background-color: red !important;
  color: white !important;
  border: white;
  border-bottom: solid;
  border-right: solid;
  border-top: solid;
  border-top-left-radius: 0px 0px !important; 
  border-bottom-left-radius: 0px 0px !important; 
  border-top-right-radius: 20px 20px !important; 
  border-bottom-right-radius: 20px 20px !important; 
}
.resposta {
  display: block;
  margin: 10px;
  background-color: red !important;
  color: white !important;
  height: 50px;
  border: white;
  border: solid;
  border-top-left-radius: 10px 10px !important; 
  border-bottom-left-radius: 10px 10px !important; 
  border-top-right-radius: 10px 10px !important; 
  border-bottom-right-radius: 10px 10px !important; 
}
.image-reaction {
  height: 100vh;
}

</style>