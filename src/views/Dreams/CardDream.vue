<template>
       <v-card  class="mx-auto pa-0 ma-0 elevation-0" max-width="100%">
    <v-list-item three-line>
        <v-list-item-avatar class="avatar" height="130" width="125" tile color="grey">
             <v-img cover :src="require(`@/assets/${dream.img}.png`)"></v-img>
        </v-list-item-avatar>
      <v-list-item-content class="mt-3">
          <h3 class="text-name mb-1">{{dream.name}}</h3>
       <p class="text-title mx-1 my-1 py-0">{{dream.title}}</p>
       <p class="text-detail mx-1 my-0 py-0">{{dream.detail}}</p>
         <p class="text-time mx-1 my-1">Tiempo de inversión: {{dream.time}} meses </p>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
/* eslint-disable max-len */

export default {
  data: () => ({
  }),
  props: {
    dream: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.text-name {
font-family: 'Euclid Circular A';
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #000000;
}
.text-title {
font-family: Euclid Circular A;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
color: #000000;
}
.text-detail {
font-family: Euclid Circular A;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: #000000;
}
.text-time {
font-family: Euclid Circular A;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 13px;
color: #000000;
}
</style>
