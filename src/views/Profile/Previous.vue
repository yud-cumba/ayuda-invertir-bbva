<template>
    <v-card outlined class="pa-12 d-flex flex-column rounded-lg align-center justify-center">
        <h3 class="text-center">Has invertido anteriormente?</h3>
        <v-radio-group
      v-model="row"
      row
    >
      <v-radio
        label="Si"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="No"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
    </v-card>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
h3{
    width: 200px;
}
</style>
