<template>
   <v-dialog
        class="pa-4"
        v-model="dialog"
        persistent
        min-width="90%"
      >
        <v-card min-height="90%"  class="rounded-lg px-4 d-flex flex-column justify-center align-center text-center">
          <h3 class="pt-5">
            {{title}}
          </h3>
          <v-img width="80%" src="../assets/img/start.png"></v-img>
           <v-row class="ma-4">
           <h5> {{description}}</h5>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="text-capitalize my-2"
              color="secondary"
              width="100%"
              @click="action"
              >
              {{textBtn}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    textBtn: {
      type: String,
    },
    action: {
      type: Function,
    },
  },
  data() {
    return {
      dialog: true,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
