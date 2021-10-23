<template>
    <div>
        <Resume/>
        <Expenses/>
        <ExpensesDetail />
        <CardLearn class="ma-4"/>
    </div>
</template>

<script>
import CardLearn from '../../components/CardLearn.vue';
import Expenses from './Expenses.vue';
import ExpensesDetail from './ExpensesDetail.vue';
import Resume from './Resume.vue';

export default {
  components: {
    Resume, Expenses, ExpensesDetail, CardLearn,
  },
  created() {
    this.$store.commit('SET_LAYOUT', 'bbva-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
