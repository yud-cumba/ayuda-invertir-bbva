<template>
    <div>
        <CardLearn/>
        <v-col class="d-flex flex-column justify-center align-center">
            <v-img src="@/assets/img/goal.png" class="mt-10"/>
            <p class="pa-7 text-center ">
                Omaira, sabias que otros clientes han logrado sus vacaciones soñadas invirtiendo su dinero.</p>
            <v-btn class="secondary">Sueños cumplidos</v-btn>
        </v-col>
    </div>
</template>

<script>
import CardLearn from '../../components/CardLearn.vue';

export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  components: { CardLearn },

};
</script>

<style lang="scss" scoped>
.v-image{
    width: 60vw;
    height: 60vw;
}
</style>
