<template>
    <div>
        <v-img src="../../public/win.jpeg"></v-img>
        <v-card class="win" color="blue" height="100">
            <p class="headline" style="color:white; position:relative; top:36%; padding-right:20px; padding-left:20px"> VOCÊ GANHOU 1 MILHÃO DE REAIS EM BARRAS DE OURO, QUE VALEM MAIS DO QUE DINHEIRO</p>
        </v-card>
    </div>
</template>

<script>
    export default {
        created () {
            setTimeout(() => {
                this.$router.push('/');
            },4000);
        },
    }
</script>

<style lang="scss" scoped>
.win{
    position: relative;
    bottom: 57vh;
    margin: auto;
    width: fit-content;
}
</style>