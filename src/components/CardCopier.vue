<template>
  <v-card class="mx-auto rounded-lg card my-0" max-width="100%">
    <v-list class="d-flex px-2 py-1">
      <v-list-item-avatar
        class="mx-1 rounded-lg"
        height="50"
        width="50"
        tile
        color="grey"
      >
        <v-img cover :src="`https://randomuser.me/api/portraits/${dataCopier.img_profile}`"></v-img>
      </v-list-item-avatar>
      <v-list-item-content
        class="content d-flex flex-column text-center justify-items-center align-items-center"
      >
        <h5 class="name ma-1">{{dataCopier.name}} {{dataCopier.lastname}}</h5>
        <p
          :class="
          [dataCopier.risk_level === 'A' ?
        'riskA' : dataCopier.risk_level === 'M'?
        'riskB': 'riskC', 'px-2 py-1']">{{dataCopier.risk_level}}</p>
        <p class="text teal--text subtitle-1 mx-1 my-0 py-0">{{ dataCopier.profit }}%</p>
        <v-btn
          class="pa-2 text-btn"
          color="secondary"
          @click="
            $router.push({
              name: 'CopiersDetails',
              params: { id: dataCopier.copy_bankingId, copier: dataCopier },
            })
          "
          >Ver
        </v-btn>
      </v-list-item-content>
    </v-list>
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
.card {
  border: 1px solid #040a33;
}
.riskA {
  border: 2px solid red;
  border-radius: 5px;
  color: red;
  width: 28px;
  font-size: 12px;
}
.riskC {
  border: 2px solid rgb(6, 186, 196);
  border-radius: 5px;
  color: rgb(6, 186, 196);
  width: 28px;
  height: 38px;
  font-size: 12px;
}
.riskB {
  border: 2px solid #DED95F;
  border-radius: 5px;
  color: #DED95F;
  width: 28px;
  font-size: 12px;
}
.content {
  height: 40px;
  justify-content: center;
}
.name {
  width: 50px;
}
.text-btn {
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 19px;
  color: #FFFFFF;
}
</style>
