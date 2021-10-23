<template>
  <div>
    <v-row class="d-flex justify-space-between mx-1 my-2">
      <h4 class="my-3">Rentabilidad</h4>
      <h3 class="teal-darken--text mt-2">76.58%</h3>
    </v-row>
    <v-row class="d-flex justify-space-between mx-1">
      <h4>Trading</h4>
      <v-icon color="primary">mdi-information</v-icon>
    </v-row>
    <h5 class="mx-1 my-1">125</h5>
    <p class="grey--text mx-1 text-uppercase subtitle-2 mt-4">Total Traders</p>
    <v-row class="mx-1">
      <p class="color1"></p>
      <p class="color2"></p>
      <p class="color3"></p>
    </v-row>
    <v-row class="mx-1">
      <small class="quarter1 mt-2"></small> <small class="px-2 pt-1">Acciones</small>
    </v-row>
    <v-row class="mx-1">
      <small class="quarter2 mt-2"></small> <small class="px-2 pt-1">NFTs</small>
    </v-row>
    <v-row class="mx-1">
      <small class="quarter3 mt-2"></small> <small class="px-2 pt-1">Criptomonedas</small>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.color1 {
  width: 92.26%;
  height: 20px;
  background: #8885fb;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.color2 {
  width: 5.47%;
  height: 20px;
  background: #abebf4;
}
.color3 {
  width: 2.05%;
  height: 20px;
  background: #ff6058;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.quarter1 {
  height: 8px;
  width: 8px;
  background: #8885fb;
}
.quarter2 {
  height: 8px;
  width: 8px;
  background: #ff6058;
}
.quarter3 {
  height: 8px;
  width: 8px;
  background: #abebf4;
}
.card {
  border-bottom-color: 4px solid red !important;
}
.column {
  width: 10px;
}
.column-1 {
  width: 1px !important;
}
</style>
