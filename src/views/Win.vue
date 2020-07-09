<template>
    <div>
        <v-img src="../../public/win.jpg"></v-img>
        <v-card class="win" color="blue">
            <p class="headline"> VOCÊ GANHOU 1 MILHÃO DE REAIS EM BARRAS DE OURO, QUE VALEM MAIS DO QUE DINHEIRO</p>
        </v-card>
    </div>
</template>

<script>
    export default {
        created () {
            setTimeout(() => {
                this.$router.push('/');
            },3000);
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