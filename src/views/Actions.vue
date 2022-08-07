<template>
  <x-header/>
  <breadcrumbs title="Акции"/>

  <x-section class="actions">

    <h3>Наши акции</h3>


    <div class="action" v-for="item in data" :key="item.id" :class="item.class">
      <div class="action-wpr">

        <div class="action-img">
          <div class="action-img-nest" :style="{background: `url(${item.img})`}">
<!--            <img :src="item.img" alt="img">-->
          </div>
        </div>
        <div class="action-desc">

          <div class="action-title">
            <router-link to="/action">{{ item.title }}</router-link>
            <span class="date">{{ item.date }}</span>
          </div>
          <div class="action-content">
            <button class="accent">Стать участником</button>
            <span>{{ item.cite }}</span>
            <p v-html="item.content"></p>
          </div>
        </div>

      </div>
    </div>
  </x-section>

  <pagination/>

  <x-footer/>



</template>

<script setup>

import XHeader from "@/components/layouts/x-header";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import XSection from "@/components/layouts/x-section";
import {ref} from "vue";
import Pagination from "@/assets/less/ui/pagination";
import XFooter from "@/components/layouts/x-footer";


const data = ref([
  {
    id: '1',
    class: 'wide',
    img: require('@/assets/img/action1.jpg'),
    title: 'Вы останетесь довольны',
    date: '10.12.2021',
    cite: `Быстро доставляем, а цену снижаем!`,
    content: `<b>Экспресс-доставка по новой цене:</b> снижение тарифов до 30% + скидка 10% для новых клиентов до конца декабря"`
  },
  {
    id: '2',
    class: '',
    img: require('@/assets/img/action2.jpg'),
    title: 'Бережная доставка',
    date: '10.12.2021',
    cite: `Быстро доставляем, а цену снижаем!`,
    content: `<b>Экспресс-доставка по новой цене:</b> снижение тарифов до 30% + скидка 10% для новых клиентов до конца декабря"`
  },
  {
    id: '3',
    class: '',
    img: require('@/assets/img/action3.jpg'),
    title: 'Бесплатная упаковка',
    date: '10.12.2021',
    cite: `Быстро доставляем, а цену снижаем!`,
    content: `<b>Экспресс-доставка по новой цене:</b> снижение тарифов до 30% + скидка 10% для новых клиентов до конца декабря"`
  },
  {
    id: '4',
    class: '',
    img: require('@/assets/img/action4.jpg'),
    title: 'Без очередей',
    date: '10.12.2021',
    cite: `Быстро доставляем, а цену снижаем!`,
    content: `<b>Экспресс-доставка по новой цене:</b> снижение тарифов до 30% + скидка 10% для новых клиентов до конца декабря"`
  },
  {
    id: '5',
    class: '',
    img: require('@/assets/img/action5.jpg'),
    title: 'Бережная доставка',
    date: '10.12.2021',
    cite: `Быстро доставляем, а цену снижаем!`,
    content: `<b>Экспресс-доставка по новой цене:</b> снижение тарифов до 30% + скидка 10% для новых клиентов до конца декабря"`
  },
  {
    id: '6',
    class: '',
    img: require('@/assets/img/action6.jpg'),
    title: 'Бесплатная упаковка',
    date: '10.12.2021',
    cite: `Быстро доставляем, а цену снижаем!`,
    content: `<b>Экспресс-доставка по новой цене:</b> снижение тарифов до 30% + скидка 10% для новых клиентов до конца декабря"`
  },
  {
    id: '7',
    class: '',
    img: require('@/assets/img/action7.jpg'),
    title: 'Без очередей',
    date: '10.12.2021',
    cite: `Быстро доставляем, а цену снижаем!`,
    content: `<b>Экспресс-доставка по новой цене:</b> снижение тарифов до 30% + скидка 10% для новых клиентов до конца декабря"`
  },
  {
    id: '8',
    class: 'wide',
    img: require('@/assets/img/action1.jpg'),
    title: 'Вы останетесь довольны',
    date: '10.12.2021',
    cite: `Быстро доставляем, а цену снижаем!`,
    content: `<b>Экспресс-доставка по новой цене:</b> снижение тарифов до 30% + скидка 10% для новых клиентов до конца декабря"`
  },
])


</script>
