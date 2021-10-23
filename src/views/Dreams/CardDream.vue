<template>
       <v-card  class="mx-auto pa-0 ma-0 elevation-0" max-width="100%">
    <v-list-item three-line>
        <v-list-item-avatar class="avatar" height="130" width="125" tile color="grey">
          <v-img cover src="https://randomuser.me/api/portraits/women/23.jpg"></v-img>
        </v-list-item-avatar>
      <v-list-item-content class="mt-3">
          <h3 class="font-weight-regular mb-1">{{dream.name}}</h3>
       <p class="text mx-1 my-1 py-0">{{dream.title}}</p>
       <p class="text mx-1 my-0 py-0">"{{dream.detail}}"</p>
         <p class="caption mx-1 my-1">Tiempo de inversión: {{dream.time}} meses </p>
      </v-list-item-content>
    </v-list-item>
    <v-btn  class="secondary pa-4 white text-capitalize"
            dark
            @click="$router.push({ name: 'Dreams'})"
                small>Ir por mis sueños</v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    dream: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
