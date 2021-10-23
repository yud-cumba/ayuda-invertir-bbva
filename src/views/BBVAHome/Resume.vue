<template>
    <div class="secondary white-text pa-3">
        <v-row class="white--text d-flex px-3 justify-space-between">
            <p >01 oct. - 01 nov.</p>
            <p>Tendencias</p>
        </v-row>
        <h4 class="white--text mt-4">Ingresos $1032.34</h4>
        <v-progress-linear
        v-model="power1"
        color="amber"
        height="15"
        ></v-progress-linear>
         <h4 class="white--text mt-4">Gastos $1032.34</h4>
         <v-progress-linear
      v-model="power2"
      color="cyan"
      height="15"
    ></v-progress-linear>
    <p class="white--text mt-4 text-center"> Tus gastos y reembolsos</p>
    <p class="white--text text-center caption"> Aprende cómo afectan a Mi dia dia
         <v-icon class="white--text">mdi-chevron-right</v-icon></p>
    </div>
</template>

<script>
export default {
  data: () => ({
    power1: 78,
    power2: 28,
  }),
};
</script>

<style lang="scss" scoped>

</style>
