import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBEI2APEgtUEAXodkVv7zf-cMuduPW_WHU",
  authDomain: "maadwalk-games.firebaseapp.com",
  databaseURL: "https://maadwalk-games.firebaseio.com",
  projectId: "maadwalk-games",
  storageBucket: "",
  messagingSenderId: "1028582553313",
  appId: "1:1028582553313:web:20aeefaf81dce3ae55e9a0"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
