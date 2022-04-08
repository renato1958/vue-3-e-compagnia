import MyCounter from '../views/MyCounter.js';

const App = {
  name: 'App',
  template: `<my-counter />`,
  components: { MyCounter }
};

const app = Vue.createApp(App);

const vm = app.mount('#app');

