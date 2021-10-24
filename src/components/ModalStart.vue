<template>
   <v-dialog
        class="pa-4"
        v-model="dialog"
        persistent
        min-width="90%"
      >
        <v-card min-height="90%"  class="rounded-lg px-4 d-flex flex-column justify-center align-center text-center">
          <h3 class="pt-5">
            Has crecer tu dinero
          </h3>
          <v-img width="80%" src="../assets/img/start.png"></v-img>
           <v-row class="ma-4">
           <h5> Que tus sueños no tengan limites, pierde el miedo a invertir con nuestros productos adaptados para tí</h5>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="text-capitalize my-2"
              color="secondary"
              width="100%"
              @click="
              $router.push({
                name: 'Init',
              })"
              >
              Saber más
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
