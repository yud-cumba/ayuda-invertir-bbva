<template>
  <v-card  class="mx-auto rounded-lg card" max-width="344">
    <v-list class="d-flex px-2">
      <v-list-item-avatar class="mx-1 rounded-sm" height="50" width="50" tile color="grey">
        <v-img cover src="https://randomuser.me/api/portraits/men/47.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content class="content d-flex flex-column text-center justify-items-center align-items-center">
       <h5 class="name ma-1">Jeff Madrid</h5>
       <p class="mx-2 py-1 risk">{{copier.risk_level}}</p>
       <p class="text teal--text subt mx-1 my-0 py-0">{{copier.profit}}</p>
       <v-btn class="pa-2 caption text-capitalize mx-1" color="secondary">Ver</v-btn>
      </v-list-item-content>
    </v-list>
  </v-card>
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
.card {
  border: 2px solid #3771B2;
}
.risk {
  border: 2px solid red;
  border-radius: 5px;
  color: red;
  width: 28px;
  font-size: 12px;
}
.content {
  height: 40px;
  justify-content: center;
;
}
.name{
  width: 50px;
}
</style>
