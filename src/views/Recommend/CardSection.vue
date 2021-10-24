<template>
  <v-card
    flat
    outlined
    width="300px"
    height="230px"
    class="card mx-4 my-10 py-2 px-4 rounded-xl d-flex flex-column align-center"
    :disabled="disabled"
    @click="goForm"
  >
    <v-row class="d-flex flex-column justify-center align-center py-5">
      <v-avatar
        style="position: absolute; bottom: 60%"
        rounded
        width="150px"
        class="pa-2 my-5"
        height="130px"
      >
        <img
          max-width="100"
          max-height="130"
          :src="`${require(`@/assets/img/${section.img}.png`)}`"
        />
      </v-avatar>
    </v-row>
    <v-row
      style="position: relative"
      class="d-flex flex-column justify-center align-center text-wrap mt-8"
    >
      <h3 class="mt-2">{{ section.title }}</h3>
      <p class="subtitle-2 font-weight-regular mt-1">
        {{ section.description }}
      </p>
      <v-checkbox
        class="rounded-circle"
        v-model="check"
        color="secondary"
        :value="check"
      ></v-checkbox
    ></v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    check() {
      return this.disabled;
    },
  },
  methods: {
    goForm() {
      this.$router.push({
        name: this.section.go,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 100px 0 0;
  text-align: center;
}
</style>
