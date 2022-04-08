App = {
  name: 'App',
  data() {
    return {
      message: 'Ciao Sofy!'
    }
  }
};

const app = Vue.createApp(App);

const vm = app.mount('#app');

