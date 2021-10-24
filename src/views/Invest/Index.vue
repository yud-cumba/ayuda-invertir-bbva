<template>
  <div>
    <v-row class="ma-4">
      <h4>Monto de Inversión</h4>
    </v-row>
    <v-row class="mx-4">
      <v-text-field
        class="my-1 py-0 rounded-lg text"
        label="Ingresa tu monto a invertir"
        placeholder="Buscar"
        color="indigo"
        solo
        v-model="invest"
        dense
        outlined
        @mouseleave="calculateInvest"
        prepend-inner-icon="mdi-cash"
  ></v-text-field>
    </v-row>
  <v-row class="ma-4">
    <h4>Portafolio Copiado</h4>
  </v-row>
  <v-card
    class="mx-auto rounded-lg py-0 ma-5 card"
    max-width="90%"
    height="220px"
  >
    <v-list-item>
      <v-list-item-avatar
        class="mt-3"
        tile
        size="30"
      >
      <v-img src="@/assets/icons/BTC.svg"></v-img>
      </v-list-item-avatar>
      <v-row class="d-flex flex-column pt-3 px-4">
        <p class="secondary--text font-weight-regular my-0 py-0">
          Bitcoin
        </p>
        <p class="caption grey--text font-weight-regular my-0 py-0">
          Bitcoin Inc
        </p>
      </v-row>
      <v-row class="d-flex flex-column pb-3">
        <p class="caption grey--text font-weight-regular my-0 py-0">
          Precio disponible
        </p>
         <p class="subtitle-2 font-weight-bold my-0 py-0">
          69.420 $
        </p>
       </v-row>
    </v-list-item>
    <v-row class="d-flex flex-column">
      <h5 class="mx-8 mt-8 primary--text mb-0">Cantidad</h5>
      <v-text-field
      class="mt-1 mx-7 py-0 rounded-lg text"
      placeholder="Cantidad"
      color="indigo"
      solo
      dense
      v-model="bitcoin"
      outlined
    ></v-text-field>
       </v-row>
       <v-row class="mx-8 d-flex flex-column caption secondary--text">
         <p class="my-0 py-0">{{'Transaction Fee  - '}} {{' 0.0002%'}}</p>
         <p class="my-0 py-0">Min 100.00 -  Max 10000.00</p>
       </v-row>
  </v-card>
  <v-card
    class="mx-auto rounded-lg py-0 ma-5 card"
    max-width="90%"
    height="220px"
  >
    <v-list-item>
      <v-list-item-avatar
        class="mt-3"
        tile
        size="30"
      >
      <v-img src="@/assets/icons/ETH.svg"></v-img>
      </v-list-item-avatar>
      <v-row class="d-flex flex-column pt-3 px-4">
        <p class="secondary--text font-weight-regular my-0 py-0">
          ETH
        </p>
        <p class="caption grey--text font-weight-regular my-0 py-0">
          ETH Inc
        </p>
      </v-row>
      <v-row class="d-flex flex-column pb-3">
        <p class="caption grey--text font-weight-regular my-0 py-0">
          Precio disponible
        </p>
         <p class="subtitle-2 font-weight-bold my-0 py-0">
          4.420 $
        </p>
       </v-row>
    </v-list-item>
    <v-row class="d-flex flex-column">
      <h5 class="mx-8 mt-8 primary--text mb-0">Cantidad</h5>
      <v-text-field
      class="mt-1 mx-7 py-0 rounded-lg text"
      placeholder="Cantidad"
      color="indigo"
      solo
      v-model="eth"
      dense
      outlined
    ></v-text-field>
       </v-row>
       <v-row class="mx-8 d-flex flex-column caption secondary--text">
         <p class="my-0 py-0">{{'Transaction Fee  - '}} {{' 0.0002%'}}</p>
         <p class="my-0 py-0">Min 100.00 -  Max 10000.00</p>
       </v-row>
  </v-card>
  <v-card
    class="mx-auto rounded-lg py-0 ma-5 card"
    max-width="90%"
    height="220px"
  >
    <v-list-item>
      <v-list-item-avatar
        class="mt-3"
        tile
        size="30"
      >
      <v-img src="@/assets/icons/FTT.svg"></v-img>
      </v-list-item-avatar>
      <v-row class="d-flex flex-column pt-3 px-4">
        <p class="secondary--text font-weight-regular my-0 py-0">
          FTT
        </p>
        <p class="caption grey--text font-weight-regular my-0 py-0">
          FTT Inc
        </p>
      </v-row>
      <v-row class="d-flex flex-column pb-3">
        <p class="caption grey--text font-weight-regular my-0 py-0">
          Precio disponible
        </p>
         <p class="subtitle-2 font-weight-bold my-0 py-0">
          2.420 $
        </p>
       </v-row>
    </v-list-item>
    <v-row class="d-flex flex-column">
      <h5 class="mx-8 mt-8 primary--text mb-0">Cantidad</h5>
      <v-text-field
      class="mt-1 mx-7 py-0 rounded-lg text"
      placeholder="Cantidad"
      color="indigo"
      solo
      v-model="ftt"
      dense
      outlined
    ></v-text-field>
    </v-row>
    <v-row class="mx-8 d-flex flex-column caption secondary--text">
      <p class="my-0 py-0">{{'Transaction Fee  - '}} {{' 0.0002%'}}</p>
      <p class="my-0 py-0">Min 100.00 -  Max 10000.00</p>
    </v-row>
  </v-card>
  <v-row class="d-flex justify-center my-8">
    <v-btn
      color="secondary"
      width="82%"
      @click="
      $router.push({
        name: 'Trading',
      })"
      >
      Comprar
    </v-btn>
  </v-row>
  </div>
</template>

<script>
export default {
  props: {
    copier: {
      type: Object,
    },
  },
  data() {
    return {
      bitcoin: 0,
      eth: 0,
      ftt: 0,
      invest: 0,
    };
  },
  created() {
    console.log(this.$props);
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  methods: {
    calculateInvest() {
      this.bitcoin = 0;
      this.eth = 0;
      this.ftt = 0;
      console.log(this.invest);
      this.bitcoin = (this.invest * 0.6);
      this.eth = (this.invest * 0.3);
      this.ftt = (this.invest * 0.1);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid rgb(41, 41, 66);
}
</style>
