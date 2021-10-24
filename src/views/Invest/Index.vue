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
          € 69.420
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
      readonly
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
          € 4.420
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
      readonly
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
          € 2.420
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
      readonly
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
      class="secondary pa-5 white text-capitalize rounded-lg"
            dark
      @click="show=true"
      >
      Comprar
    </v-btn>
  </v-row>
  <ModalStart title="Felicidades!"
        description="Haz realizado exitosamente tu inversión, que tus sueños no tengan límites"
         textBtn="Cerrar" :action="close" :dialog="show"/>
  </div>
</template>

<script>
import ModalStart from '@/components/ModalStart.vue';

export default {
  props: {
    copier: {
      type: Object,
    },
  },
  data() {
    return {
      show: false,
      bitcoin: 0,
      eth: 0,
      ftt: 0,
      invest: 0,
    };
  },
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  methods: {
    close() {
      this.$router.push({
        name: 'Init',
      });
    },
  },
  watch: {
    invest() {
      this.bitcoin = Math.round(this.invest * 0.6);
      this.eth = Math.round(this.invest * 0.3);
      this.ftt = Math.round(this.invest * 0.1);
    },
  },
  components: {
    ModalStart,
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid rgb(41, 41, 66);
}
</style>
