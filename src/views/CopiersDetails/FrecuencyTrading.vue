<template>
  <div>
    <v-row class="d-flex justify-space-between mx-1 mt-6">
      <h4>Trades Frecuentes</h4>
      <v-icon color="primary">mdi-information</v-icon>
    </v-row>
    <v-row>
      <v-card width="100%" tile class="card mt-4 mx-2 px-2">
        <v-list class="d-flex px-1 py-1">
          <v-list-item-avatar
            class="mx-1 rounded-sm"
            height="40"
            width="40"
            tile
            color="black"
          >
            <v-img cover src="@/assets/icons/BTC.svg"></v-img>
          </v-list-item-avatar>
          <v-row class="d-flex py-3 pr-2 pl-4 mx-2">
            <v-row class="d-flex flex-column px-2 mt-2 column">
              <h5 class="name my-0 py-0">Bitcoin</h5>
              <small>Bitcoin.in</small>
            </v-row>
            <v-row class="d-flex flex-column column-1 mt-2 mx-0">
              <small class="name my-0 py-0 teal--text text--darken-2">92.26%</small>
              <small class="red--text">-13.80</small>
            </v-row>
            <v-row class="d-flex flex-column column mt-2 mx-0">
              <small class="name font-weight-regular grey--text my-0 py-0 mx-0"
                >Beneficio medio</small
              >
              <small class="name font-weight-regular grey--text my-0 py-0 mx-0"
                >Perdida media</small
              >
            </v-row>
          </v-row>
        </v-list>
      </v-card>
      <v-card width="100%" tile class="card mt-4 mx-2 px-2">
        <v-list class="d-flex px-1 py-1">
          <v-list-item-avatar
            class="mx-1 rounded-sm"
            height="40"
            width="40"
            tile
            color="black"
          >
            <v-img cover src="@/assets/icons/ETH.svg"></v-img>
          </v-list-item-avatar>
          <v-row class="d-flex py-3 pr-2 pl-4 mx-2">
            <v-row class="d-flex flex-column px-2 mt-2 column">
              <h5 class="name my-0 py-0">ETH</h5>
              <small>ETH.io</small>
            </v-row>
            <v-row class="d-flex flex-column column-1 mt-2 mx-0">
              <small class="name my-0 py-0 teal--text text--darken-2">82.26%</small>
              <small class="red--text">-13.80</small>
            </v-row>
            <v-row class="d-flex flex-column column mt-2 mx-0">
              <small class="name font-weight-regular grey--text my-0 py-0 mx-0"
                >Beneficio medio</small
              >
              <small class="name font-weight-regular grey--text my-0 py-0 mx-0"
                >Perdida media</small
              >
            </v-row>
          </v-row>
        </v-list>
      </v-card>
            <v-card width="100%" tile class="card mt-4 mx-2 px-2">
        <v-list class="d-flex px-1 py-1">
          <v-list-item-avatar
            class="mx-1 rounded-sm"
            height="40"
            width="40"
            tile
            color="black"
          >
            <v-img cover src="@/assets/icons/FTT.svg"></v-img>
          </v-list-item-avatar>
          <v-row class="d-flex py-3 pr-2 pl-4 mx-2">
            <v-row class="d-flex flex-column px-2 mt-2 column">
              <h5 class="name my-0 py-0">FTT</h5>
              <small>FTT.io</small>
            </v-row>
            <v-row class="d-flex flex-column column-1 mt-2 mx-0">
              <small class="name my-0 py-0 teal--text text--darken-2">74.26%</small>
              <small class="red--text">-11.80</small>
            </v-row>
            <v-row class="d-flex flex-column column mt-2 mx-0">
              <small class="name font-weight-regular grey--text my-0 py-0 mx-0"
                >Beneficio medio</small
              >
              <small class="name font-weight-regular grey--text my-0 py-0 mx-0"
                >Perdida media</small
              >
            </v-row>
          </v-row>
        </v-list>
      </v-card>
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
};
</script>

<style lang="scss" scoped>
</style>
