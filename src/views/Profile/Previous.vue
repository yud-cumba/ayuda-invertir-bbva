<template>
    <v-card color="primary" class="white--text pa-5 mt-3 d-flex flex-column rounded-lg align-center justify-center">
        <h3 class="text-center">¿Has invertido anteriormente?</h3>
        <v-radio-group
          v-model="row"
          row
        >
          <v-radio
            dark
            color="white"
            label="Si"
            @click="yesOption"

          ></v-radio>
          <v-radio
            dark
            label="No"
            @click="noOption"
          ></v-radio>
    </v-radio-group>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      row: null,
    };
  },
  methods: {
    yesOption() {
      this.$router.push({ name: 'NewsTops' });
    },
    noOption() {
      this.$router.push({ name: 'Advice' });
    },
  },
};
</script>

<style lang="scss" scoped>
h3{
    width: 250px;
}
</style>
