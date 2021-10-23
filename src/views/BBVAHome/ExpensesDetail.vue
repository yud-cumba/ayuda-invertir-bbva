<template>
   <v-container>
    <v-row v-for="item in items" :key="item">
      <v-col
      class="ml-3 py-0 secondary--text font-weight-regular"
      :cols="7"
      >
       <p><v-icon class="mr-1 secondary--text">{{item.icon}}</v-icon>{{item.title}}</p>
      </v-col>
      <v-col
       :cols="4"
      class="ml-3 py-0"
      >
        <p class="text-end secondary--text font-weight-regular mr-2">
            {{item.money}}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [{
      icon: 'mdi-bank',
      title: 'Retiros de dinero',
      money: '$1550.00',
    },
    {
      icon: 'mdi-currency-usd',
      title: 'Pagos financieros',
      money: '$250.00',
    },
    {
      icon: 'mdi-dots-square',
      title: 'Otros',
      money: '$250.00',
    }],

  }),
};
</script>

<style lang="scss" scoped>
#doughnut-chart{
    height: 200px !important;
}
</style>
