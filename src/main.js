// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "es6-promise/auto";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import store from "./vuex/store";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
/* eslint-disable no-new */

import vBScrollspy from "bootstrap-vue/es/directives/scrollspy/scrollspy";
Vue.directive("b-scrollspy", vBScrollspy);
import vBToggle from "bootstrap-vue/es/directives/toggle/toggle";
Vue.directive("b-toggle", vBToggle);
import vBModal from "bootstrap-vue/es/directives/modal/modal";
Vue.directive("b-modal", vBModal);


import BButton from "bootstrap-vue/es/components/button/button";
Vue.component("b-button",BButton);
import BForm from "bootstrap-vue/es/components/form/form";
Vue.component("b-form", BForm);
import BFormGroup from "bootstrap-vue/es/components/form-group/form-group";
Vue.component("b-form-group", BFormGroup);
import BFormInput from "bootstrap-vue/es/components/form-input/form-input";
Vue.component("b-form-input", BFormInput);
import BInputGroup from "bootstrap-vue/es/components/input-group/input-group";
Vue.component("b-input-group", BInputGroup);
import BAlert from "bootstrap-vue/es/components/alert/alert";
Vue.component("b-alert", BAlert);
import BProgress from "bootstrap-vue/es/components/progress/progress";
Vue.component("b-progress", BProgress);
import BFormTextarea from "bootstrap-vue/es/components/form-textarea/form-textarea";
Vue.component("b-form-textarea", BFormTextarea);
import BListGroup from "bootstrap-vue/es/components/list-group/list-group";
Vue.component("b-list-group", BListGroup);
import BListGroupItem from "bootstrap-vue/es/components/list-group/list-group-item";
Vue.component("b-list-group-item", BListGroupItem);
import BCollapse from "bootstrap-vue/es/components/collapse/collapse";
Vue.component("b-collapse", BCollapse);
import BCard from "bootstrap-vue/es/components/card/card";
Vue.component("b-card", BCard);
import BCardBody from "bootstrap-vue/es/components/card/card-body";
Vue.component("b-card-body", BCardBody);
import BCardTitle from "bootstrap-vue/es/components/card/card-title";
Vue.component("b-card-title", BCardTitle);
import BCardSubTitle from "bootstrap-vue/es/components/card/card-sub-title";
Vue.component("b-card-sub-title", BCardSubTitle);
import BCardText from "bootstrap-vue/es/components/card/card-text";
Vue.component("b-card-text", BCardText);
import BBadge from "bootstrap-vue/es/components/badge/badge";
Vue.component("b-badge", BBadge);
import BTabs from "bootstrap-vue/es/components/tabs/tabs";
Vue.component("b-tabs", BTabs);
import BTab from "bootstrap-vue/es/components/tabs/tab";
Vue.component("b-tab", BTab);
import BSpinner from "bootstrap-vue/es/components/spinner/spinner";
Vue.component("b-spinner", BSpinner);
import BModal from "bootstrap-vue/es/components/modal/modal";
Vue.component("b-modal", BModal);
import BFormSelect from "bootstrap-vue/es/components/form-select/form-select";
Vue.component("b-form-select", BFormSelect);
import BTable from "bootstrap-vue/es/components/table/table";
Vue.component("b-table", BTable);

import LeftNav from "./components/Element/LeftNav";
Vue.component("left-nav", LeftNav);
import SymbolButton from "./components/Element/SymbolButton";
Vue.component("symbol-button", SymbolButton);

import Nav from 'bootstrap-vue/es/components/nav';
Vue.use(Nav);
import Navbar from 'bootstrap-vue/es/components/navbar';
Vue.use(Navbar);

new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
