<template>
    <div class="secondary white-text pa-3">
        <v-row class="white--text d-flex px-3 justify-space-between">
            <p >01 oct. - 01 nov.</p>
            <p>Tendencias</p>
        </v-row>
        <h4 class="white--text mt-4">Ingresos $1032.34</h4>
        <v-progress-linear
        v-model="power"
        color="amber"
        height="15"
        ></v-progress-linear>
         <h4 class="white--text mt-4">Ingresos $1032.34</h4>
         <v-progress-linear
      v-model="power"
      color="cyan"
      height="15"
    ></v-progress-linear>
    </div>
</template>

<script>
export default {
  data: () => ({
    power: 78,
  }),
};
</script>

<style lang="scss" scoped>

</style>
