<template>
  <component :is="layout"></component>
</template>
<script>

import { mapState } from 'vuex';
import LoginLayout from '@/layouts/Login.vue';
import MainLayout from '@/layouts/Main.vue';
import BbvaLayout from '@/layouts/Bbva.vue';

export default {
  components: { MainLayout, BbvaLayout, LoginLayout },
  computed: mapState(['layout']),
};
</script>

<style lang="scss">
@import './App.scss';
</style>
