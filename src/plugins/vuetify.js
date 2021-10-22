import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#252A4D',
        secondary: '#3771B2',
        black: '#161A33',
        teal:  '#00E291',
        red: '#F75757',
        yellow: '#DED95F'
      },
      dark: {
        primary: '#3771B2',
        secondary: '#252A4D',
      },
    },
  },
  lang: {
    locales: { es },
    current: 'es',
  },
});
