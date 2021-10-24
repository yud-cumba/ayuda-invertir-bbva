<template>
  <v-card
    @click="
      $router.push({
        name: 'CopiersDetails',
        params: { id: dataCopier.copy_bankingId, copier: dataCopier },
      })"
      color="primary" class="rounded-lg" min-width="282">
    <v-list-item three-line>
        <v-list-item-avatar class="avatar" height="100" width="100" tile color="grey">
          <v-img cover :src="`https://randomuser.me/api/portraits/${dataCopier.img_profile}`"></v-img>
        </v-list-item-avatar>
      <v-list-item-content class="px-3">
       <v-row class="d-flex mt-1 mb-0">
          <h3 class="font-weight-regular white--text mb-1">{{dataCopier.name}}</h3>
          <small class="mt-1 font-weight-thin mx-2 white--text">{{dataCopier.lastname}}</small>
       </v-row>
       <p class="text teal--text mx-1 my-0 py-0">{{dataCopier.profit}}%</p>
       <p class="text caption white--text mx-1 my-0 py-0">{{dataCopier.follower}} copias</p>
       <v-row class="d-flex text-center text-center align-items-center px-4 mt-3">
         <v-icon class="ma-0 pa-0 icon" color="secondary">mdi-information-outline</v-icon>
         <p class="caption white--text mx-1">Riesgo</p>
         <small
           class="px-2 pt-1 risk">{{dataCopier.risk_level}}</small>
       </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import users from '@/mocks/users.json';

export default {
  props: {
    copier: {
      type: Object,
    },
  },
  data() {
    return {
      dataCopier: {},
    };
  },
  created() {
    console.log(users);
    const [user] = users.filter(({ userId }) => userId === this.copier.userId);
    this.dataCopier = { ...user, ...this.copier };
  },
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
