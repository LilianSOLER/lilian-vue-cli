import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faInstagram, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// // library.add(faHatWizard)
// library.add(faHatWizard, faFacebook, faTwitter, faInstagram, faYoutube, faGithub, faLinkedin)

createApp(App)
  .use(router)
  .use(createPinia())
  // .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
