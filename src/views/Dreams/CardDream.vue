<template>
       <v-card  class="mx-auto pa-0 ma-0 elevation-0" max-width="100%">
    <v-list-item three-line>
        <v-list-item-avatar class="avatar" height="130" width="125" tile color="grey">
          <v-img cover
            :src="img">
             </v-img>
        </v-list-item-avatar>
      <v-list-item-content class="mt-3">
          <h3 class="font-weight-regular mb-1">{{dream.name}}</h3>
       <p class="text mx-1 my-1 py-0">{{dream.title}}</p>
       <p class="text mx-1 my-0 py-0">"{{dream.detail}}"</p>
         <p class="caption mx-1 my-1">Tiempo de inversión: {{dream.time}} meses </p>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
/* eslint-disable max-len */

export default {
  data: () => ({
    img: 'https://pixabay.com/get/g332e92b9546afc7facbda1b5156d8abaf4ce77a80e1abc2ae0abcb3d40be03a992e8e619b956d5a224eea537f3e191e5_1280.jpg',
  }),
  props: {
    dream: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
