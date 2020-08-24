import Vue from 'vue'

// UI
import Intro from '@/components/UI/Intro.vue'
import Message from '@/components/UI/Message.vue'
import PostsList from '@/components/Blog/PostsList/PostsList.vue'

Vue.component('Message', Message);
Vue.component('Intro', Intro);
Vue.component('PostsList', PostsList);

// Controls
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'

Vue.component('AppButton', AppButton);
Vue.component('AppInput', AppInput);
Vue.component('AppTextArea', AppTextArea);