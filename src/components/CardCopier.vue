<template>
  <v-card color="primary" class="mx-auto pa-1 rounded-lg" max-width="344">
    <v-list-item three-line>
        <v-list-item-avatar class="avatar" height="100" width="145" tile color="grey">
          <v-img cover src="https://randomuser.me/api/portraits/women/76.jpg"></v-img>
        </v-list-item-avatar>
      <v-list-item-content class="mx-1 px-1">
       <v-row class="d-flex mx-1 mt-1 mb-0 pa-0">
          <h3 class="font-weight-regular white--text mb-1">Sandy</h3>
          <small class="mt-1 font-weight-thin mx-2 white--text">Sevilla</small>
       </v-row>
       <p class="text teal--text mx-1 my-0 py-0">76.05%</p>
       <p class="text caption white--text mx-1 my-0 py-0">1200 copias</p>
       <v-row class="d-flex text-center text-center align-items-center px-4 mt-3">
         <v-icon class="ma-0 pa-0 icon" color="secondary">mdi-information-outline</v-icon>
         <p class="caption white--text mx-1">Riesgo</p>
         <small class="px-2 pt-1 risk">6</small>
       </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.risk {
  border: 2px solid #DED95F;
  border-radius: 5px;
  color: #DED95F;
  height: 25px;
  align-items: center;
  text-align: justify;
}
.icon {
  font-size: 20px ;
  height: 20px;
}
.text {
  height: 5px;
}
.avatar {
  border-radius: 5px !important;
}
</style>
