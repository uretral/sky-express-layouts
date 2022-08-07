<template>

  <personal>
    <div class="addressBook">
      <x-row class="addressBook-form">
        <h2>Добавить контакт</h2>

        <label class="contrast">
          <input type="text" placeholder="Ф.И.О.">
        </label>

        <label class="contrast">
          <input type="text" placeholder="Организация">
        </label>

        <label class="contrast">
          <input type="text" placeholder="+7 (---) --- -- --">
        </label>
        <x-selectbox placeholder="Страна"></x-selectbox>

        <x-selectbox placeholder="Город"></x-selectbox>

        <label class="contrast">
          <input type="text" placeholder="Организация">
        </label>

        <label class="contrast half">
          <input type="text" placeholder="Индекс">
        </label>

        <label class="contrast half">
          <input type="text" placeholder="Улица">
        </label>

        <label class="contrast half">
          <input type="text" placeholder="Дом/строение">
        </label>

        <label class="contrast half">
          <input type="text" placeholder="Квартира/офис">
        </label>

        <label class="contrast">
          <textarea placeholder="Доп. информация"></textarea>
        </label>

        <label>
          <button class="accent">Сохранить</button>
        </label>



      </x-row>
      <x-row class="addressBook-data">
        <h2>Ваши контакты</h2>

        <label class="regular search">
          <input type="search" placeholder="Поиск">
          <button class="clean"></button>
        </label>




        <custom-scrollbar :auto-hide="false" class="addressBook-contacts" >
          <div class="addressBook-contact" v-for="i in 20" :key="i">
            <div class="addressBook-contact_info">
              <b>Сабаева Марина / ООО "ТЕЛКОМНЭТ"</b>
              <span class="address">г. Москва, ул. Зеленоградская, 17</span>
              <span class="tel">+7 903 119 21 51</span>
            </div>
            <div class="addressBook-contact_btn">
              <button class="edit"></button>
              <button class="delete"></button>
            </div>

          </div>

        </custom-scrollbar>






      </x-row>
    </div>
  </personal>

</template>

<script lang="ts" setup>

import Personal from "@/components/layouts/personal.vue";
import XRow from "@/components/layouts/x-row.vue";
import {ref} from "vue";
import XSelectbox from "@/components/form/x-selectbox.vue";

const cases = ref([
  {id: 'box-envelope', title: 'Конверт с документами', desc: '290 х 210 х 10 мм ', weight: 'до 0,5 кг'},
  {id: 'box-s', title: 'Коробка маленькая', desc: '200 х 200 х 200 мм ', weight: 'до 4х кг'},
  {id: 'box-x', title: 'Коробка средняя', desc: '400 х 400 х 400 мм ', weight: 'до 4х кг'},
  {id: 'box-light', title: 'Негабаритный груз', desc: '', weight: ''},
  {id: 'box-custom', title: 'Точный размер', desc: '', weight: ''},
])
</script>
