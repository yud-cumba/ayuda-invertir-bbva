<template>
    <div class="mt-2">
        <Saving/>
        <h5 class="text-center">¿Que porcentaje de tus ahorros quieres invertir? </h5>
        <p  class="text-center caption">
            <v-icon small>mdi-information</v-icon> Recuerda que esta inversión tiene 0 riesgo</p>
            <Percentage/>
            <p  class="text-center caption">
            <v-icon small>mdi-information</v-icon> Por ser un nuevo inversionita tu limite será el 50% de tus ahorros</p>
            <v-row class="d-flex justify-center mt-4">
             <v-btn color="secondary" width="200" class="py-2 text-capitalize" @click="$router.push({
                 name: 'Recommend'
             })"> Continuar </v-btn>
            </v-row>
    </div>
</template>

<script>
import Saving from '@/components/Saving.vue';
import Percentage from './Percentage.vue';

export default {
  components: { Saving, Percentage },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
