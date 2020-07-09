<template>
    <div>
        <v-img src="../../public/score.jpg"></v-img>
        <v-card style="position: relative; bottom: 105vh; left: 63vw;" color="indigo accent-2" width="400" height="100" > 
            <p style="text-align:center; position: relative; top:36%; color: lightgrey" class="text-h6">Você ganhou R${{ score }}.</p> 
        </v-card>
        <v-btn to="/" class="button" height="50" width="195" color="indigo accent-2" style="margin-right:5px">
            <div style="color:lightgrey" class="text-h6"> Menu </div>
        </v-btn>
        <v-btn to="/game" class="button" height="50" width="195" color="indigo accent-2" style="margin-left:5px">
            <div style="color:lightgrey" class="text-h6"> Jogue Novamente </div>
        </v-btn>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score: this.$store.state.money,
            }
        },
    }
</script>

<style lang="scss" scoped>
.button{
    position: relative;
    bottom: 102vh;
    left:63vw;
}
</style>