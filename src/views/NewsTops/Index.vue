<template>
    <div>
        NEWS
    </div>
</template>

<script>
export default {
  name: 'NewsTops',
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
