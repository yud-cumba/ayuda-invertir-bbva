<template>
<div>
  <NoDesktop v-if="!$vuetify.breakpoint.smAndDown"/>
  <component v-else :is="layout"></component>
</div>
</template>
<script>

import { mapState } from 'vuex';
import LoginLayout from '@/layouts/Login.vue';
import MainLayout from '@/layouts/Main.vue';
import BbvaLayout from '@/layouts/Bbva.vue';
import NoDesktop from '@/components/NoDesktop.vue';

export default {
  components: {
    MainLayout, BbvaLayout, LoginLayout, NoDesktop,
  },
  computed: mapState(['layout']),
};
</script>

<style lang="scss">
@import './App.scss';
</style>
