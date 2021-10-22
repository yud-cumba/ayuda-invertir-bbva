<template>
    <h1>HACKATON BBVA</h1>
</template>

<script>

export default {
  name: 'Home',
  async created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  components: {
  },
};
</script>
