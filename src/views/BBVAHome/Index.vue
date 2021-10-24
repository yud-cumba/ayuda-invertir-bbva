<template>
    <div class="pt-3">
        <Resume/>
        <Expenses/>
        <ExpensesDetail />
        <CardLearn class="ma-4" title="MIS INVERSIONES"
        detail="Con esta seccion puedes invertir de forma segura" btnText="Ver Planes"
        :action="goInit"/>
        <CardLearn class="ma-4" title="MIS PRESUPUESTOS"
        :action="goOther"
        detail="Ahora con Mis Presupuestos puedes ordenar tus gastos de forma segura" btnText="Crear presupuesto"/>
        <br>
        <ModalStart />
    </div>
</template>

<script>
import CardLearn from '../../components/CardLearn.vue';
import ModalStart from '../../components/ModalStart.vue';
import Expenses from './Expenses.vue';
import ExpensesDetail from './ExpensesDetail.vue';
import Resume from './Resume.vue';

export default {
  components: {
    Resume,
    Expenses,
    ExpensesDetail,
    CardLearn,
    ModalStart,
  },
  methods: {
    goOther() {
      this.$router.push('/404');
    },
    goInit() {
      this.$router.push({
        name: 'Init',
      });
    },
  },
  created() {
    this.$store.commit('SET_LAYOUT', 'bbva-layout');
  },
};
</script>

<style lang="scss" scoped>

</style>
