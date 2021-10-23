<template>
    <div>
        <Resume/>
        <Expenses/>
    </div>
</template>

<script>
import Expenses from './Expenses.vue';
import Resume from './Resume.vue';

export default {
  components: { Resume, Expenses },
  created() {
    this.$store.commit('SET_LAYOUT', 'bbva-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
