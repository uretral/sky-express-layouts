<template>
  <x-header/>
  <breadcrumbs title="Контакты"/>
  <x-section class="contacts-wpr">
    <div class="contacts">

      <h3>Наши офисы</h3>

      <div class="contacts-city">
        <span>г. Москва</span>
        <em><b>Всего</b>: 5 офисов</em>
      </div>

      <div class="contacts-map">
        <img :src="require('@/assets/img/map.jpg')" alt="img"/>
      </div>


      <div class="contacts-office" v-for="i in 5" :key="i">
        <div class="address">
          <span class="circled" v-text="i"></span>
          <p>
            <b>117420, Москва,</b>
            <b>ул. Наметкина, 9/1, </b>
          </p>
        </div>

        <div class="tel">
          <span class="circled"></span>
          <p>
            <b>+ 7 <i>222</i> 222-22-22</b>
            <em>Работаем круглосуточно</em>
          </p>
        </div>

        <div class="email">
          <span class="circled"></span>
          <p>
            info@sky-express.ru
          </p>
        </div>


      </div>


    </div>
  </x-section>


  <x-footer/>

</template>

<script setup>

import XSection from "@/components/layouts/x-section";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import XHeader from "@/components/layouts/x-header";
import XFooter from "@/components/layouts/x-footer";
</script>
