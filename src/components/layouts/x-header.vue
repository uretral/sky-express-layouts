<template>
  <header>
    <div>
      <div :class="wpr">


        <input type="checkbox" id="headerNav"/>
        <label for="headerNav"></label>

        <div class="header">
          <a href="/public" class="header-logo">
            <img src="@/assets/img/svg-logo.svg" alt="logo"/>
          </a>
          <a href="tel:+72222222222" class="header-tel">
            + 7 <em>222</em> 222-22-22
            <span>Работаем круглосуточно</span>
          </a>
          <a href="/public" class="header-login btn">Войти в кабинет</a>
        </div>

        <ul class="header-nav">
          <li v-for="item in menu" :key="item.title" :class="{parent:item.hasOwnProperty('submenu')}">
            <a href="javascript:">
              <span class="header-nav-icon">
                <img :src="require(`@/assets/img/icons/nav/${item.icon}.png`)" alt=""/>
              </span>

              {{item.title}}
            </a>
            <ul v-if="item.hasOwnProperty('submenu')">
              <li v-for="submenu in item.submenu" :key="`child-${submenu.title}`">
                <a href="javascript:" >{{submenu.title}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'x-header',
  props: ['wpr'],
  components: {},
  data(){
    return {
      menu: [
        {title:'Рассчитать доставку', icon: '1'},
        {title:'Вызвать курьера', icon: '2', submenu: [
            {title:'Полезная информация'},
            {title:'Услуги'},
            {title:'Контакты'}
          ]},
        {title:'Акции', icon: '3'},
        {title:'Полезная информация', icon: '4'},
        {title:'Услуги', icon: '5'},
        {title:'Контакты', icon: '6'},
      ]
    }
  },
  methods: {
    checkRoute() {
      if(this.$route.name === 'Home'){
        let body = document.querySelector('body')
        if (body) {
          body.classList.add('home')
        }

      }
    }
  },
  mounted() {
    this.checkRoute()
    console.log(this.$route.name);
  }
});
</script>
