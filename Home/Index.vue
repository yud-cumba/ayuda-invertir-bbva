<template>
<div>
    <h1>HACKATON BBVA :v</h1>
</div>
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
