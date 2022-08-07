<template>
  <header>
    <div>
      <div :class="wpr">

        <input type="checkbox" id="headerNav"/>
        <label for="headerNav"></label>
        <div class="header">
          <a href="/" class="header-logo" @click="$router.push({name:'Home'})">
            <img v-if="$route.name === 'Home'" src="@/assets/img/svg-logo.svg" alt="logo"/>
            <img v-else src="@/assets/img/svg-logo-regular.svg" alt="logo"/>
          </a>
          <a href="tel:+72222222222" class="header-tel">
            + 7 <em>222</em> 222-22-22
            <span>Работаем круглосуточно</span>
          </a>
          <a href="/personal" class="header-login btn">Войти в кабинет</a>
        </div>


        <ul v-show="bodyClass !== 'personal'" class="header-nav">
          <li v-for="item in menu" :key="item.title" :class="{parent:item.hasOwnProperty('submenu')}">
            <a :href="item.to">
              <span class="header-nav-icon">
                <img :src="require(`@/assets/img/icons/nav/${item.icon}.png`)" alt=""/>
              </span>

              {{ item.title }}
            </a>
            <ul v-if="item.hasOwnProperty('submenu')">
              <li v-for="submenu in item.submenu" :key="`child-${submenu.title}`">
                <a href="javascript:">{{ submenu.title }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>

</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'x-header',
  props: ['wpr'],
  components: {},
  data() {
    return {
      menu: [
        {title: 'Рассчитать доставку', icon: '1', to: '/calculator'},
        {
          title: 'Вызвать курьера', icon: '2', to: '/calculator'
          , submenu: [
            {title:'Полезная информация'},
            {title:'Услуги'},
            {title:'Контакты'}
          ]
        },
        {title: 'Акции', icon: '3', to: '/actions'},
        {title: 'Полезная информация', icon: '4', to: '/calculator'},
        {title: 'Услуги', icon: '5', to: '/calculator'},
        {title: 'Контакты', icon: '6', to: '/contacts'},
      ],
      bodyClass: ''
    }
  },
  methods: {


    checkRoute() {



      let b = document.querySelector('body')
      if (b) {


        if(this.$route.name === 'Home') {
          b.classList.add('home')
          this.bodyClass = 'home'
        } else {
          b.classList.remove('home')
        }

        if(this.$route.path.includes('personal') ) {
          b.classList.add('home')
          b.classList.add('personal')
          this.bodyClass = 'personal'
        } else {
          b.classList.remove('home personal')
        }
      }

    }
  },
  watch: {
    'this.$route.name'(n, o) {
      if (n != o)
        this.checkRoute()
    }
  },
  mounted() {
    this.checkRoute()
  }

});
</script>
