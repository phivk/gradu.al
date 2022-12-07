import Vue from "vue";
import AppLink from "../components/AppLink.vue";
import frag from "vue-frag";

Vue.directive("frag", frag);
Vue.component("AppLink", AppLink);
