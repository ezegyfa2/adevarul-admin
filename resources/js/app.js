require('./bootstrap');

window.Vue = require('vue').default

require('data-collector-vue-components').default.install(Vue);

const app = new Vue({
    el: '#app',
});
