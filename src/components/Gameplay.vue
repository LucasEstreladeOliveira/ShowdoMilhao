<template>
  <v-row>
    <v-col style="padding-top:0px; padding-right: 0px" cols="4" >
      <v-card tile flat class="main-card">
        <v-img src="../../public/background-perguntas.jpeg"></v-img> 
        <v-img src="../../public/JogodomilhaoLogo.png" style="position:relative; bottom:94vh" height="100" contain></v-img>
      </v-card>
      <div class="pergunta-div">
        <v-card class="pergunta-card"> 
          <p class="text-h5">{{ data.perguntas[count].pergunta }}</p>
        </v-card>
        <v-btn :disabled="erro" v-for="r in data.perguntas[count].respostas" v-bind:key="r.label" class="resposta text-h6" width="428" @click="adicionaResposta(r)">
          <p style="margin-left:10px">{{ r.label }}</p>
        </v-btn>
      </div>
      <v-row class="escolhas">
        <v-col cols="4">
          <v-card class="escolha" color="yellow" height="80"> 
            <p class="text-h6 escolha-text">{{ proxValor }}</p>
          </v-card>
          <div style="color: white; text-align:center" class="text-h5"> ACERTAR </div>
        </v-col>
        <v-col cols="4">
          <v-card @click="parar()" class="escolha" color="yellow" height="80">
            <p class="text-h6 escolha-text">{{ $store.state.money }}</p>
          </v-card>
          <div style="color: white; text-align:center" class="text-h5"> PARAR </div>
        </v-col>
        <v-col cols="4">
          <v-card class="escolha" color="yellow" height="80">
            <p class="text-h6 escolha-text">{{ $store.state.errar }}</p>
          </v-card>
          <div style="color: white; text-align:center" class="text-h5"> ERRAR </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col style="padding:0px" cols="8" >
      <v-img :src="require('../../public/' + state)" class="image-reaction"></v-img>
    </v-col>
  </v-row>
</template>

<script>
  import dados from "../../public/data.json";

  export default {
    name: 'Gameplay',
    data() {
      return {
        data: dados,
        count:0,
        state: "",
        erro: false,
        etapaAnterior: 1,
        money: 0,
        proxValor: 0,
      }
    },
    created () {
      this.state = "aguardando-resposta.jpeg";
      this.$store.commit('addMoney', this.money);
      this.proxValor = this.incrementaValor(this.money, this.count, true);
    },
    methods: {
      incrementaValor(valor, count, prox){
        if(this.data.perguntas[count].etapa === this.etapaAnterior){
          valor += this.data.perguntas[count].valor;
        }else{
          valor = this.data.perguntas[count].valor;
          if(!prox){
            this.etapaAnterior = this.data.perguntas[count].etapa;
          }
        } 
        return valor;       
      },
      adicionaResposta(r){
        // Verifica se a resposta está correta ou não
          if(r.certo == true){
            this.state = "resposta-certa.jpeg";
            // Verifica etapa para contabilização do prêmio
            setTimeout(() => {
              this.state = "aguardando-resposta.jpeg";
              this.money = this.incrementaValor(this.money, this.count, false);
              this.$store.commit('addMoney', this.money);
              // Verifica se voce acertou todas as perguntas ou não
                console.log(this.data.perguntas.length)
                if(this.data.perguntas.length == this.count + 1){
                  setTimeout(() => {
                    this.$router.push("/win");
                  })
                }else{
                  this.proxValor = this.incrementaValor(this.money, this.count+1, true);
                  this.count++; 
                  let paramsErro = {
                    money: this.money,
                    etapa: this.data.perguntas[this.count].etapa, 
                  }
                  this.$store.commit('addErrar', paramsErro);
                  
                }
            }, 1000)
          }else{
            this.state = "resposta-errada.jpeg";
            this.erro = true;
            setTimeout(() => {
              this.$store.commit('addMoney', this.$store.state.errar);
              this.$router.push('/score');   
            }, 1000); 
          }
                console.log(this.count)

      },
      parar(){
        this.$router.push('/score');
      },
    },
  }
</script>
<style scoped>
.main-card{
  height: 100vh;
  width:36vw;
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

.escolha{
  margin-left: 10px;
  margin-right: 10px;

}

.escolhas{
  position:relative;
  bottom: 67vh;
}

.escolha-text{
  color: red;
  margin-bottom: 0px;
  top: 30%;
  position: relative;
  text-align: center;
}
</style>