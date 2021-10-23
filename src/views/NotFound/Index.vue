<template>
<div>
   <v-img src="@/assets/img/not-found.png">
   <h2 class="mt-5 white--text text-center">¡Nos estamos renovando!</h2>
   <h4 class="mt-1 white--text text-center">Página no encontrada</h4>
   </v-img>
   <v-col class="d-flex justify-center">
      <v-btn outlined color="primary" width="200" class="py-2 text-capitalize" @click="$router.push({
                 name: 'BBVAHome'
             })"> Volver al Home</v-btn>
   </v-col>
</div>
</template>

<script>
export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'login-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
