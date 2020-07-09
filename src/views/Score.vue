<template>
    <div>
        <v-card @score="showScore(s)"> {{ score }} </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score: 0,
            }
        },
       methods: {
           showScore(payload) {
               console.log(payload);

           }
       },
    }
</script>

<style lang="scss" scoped>

</style>