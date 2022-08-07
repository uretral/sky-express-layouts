<template>

  <personal>

    <x-row class="personal-shipment-form">


      <label class="contrast" for="period_from">
        <span>Период с: <sup>*</sup></span>
        <input type="date" id="period_from">
        <small></small>
      </label>
      <label class="contrast" for="period_to">
        <span>Период по: <sup>*</sup></span>
        <input type="date" id="period_to">
        <small></small>
      </label>

      <label class="contrast" for="order_nr">
        <span>Номер заказа: <sup>*</sup></span>
        <input type="number" id="order_nr">
        <small></small>
      </label>

      <label class="contrast" for="consignees_city">
        <span>Город получателя: <sup>*</sup></span>
        <input type="text" id="consignees_city">
        <small></small>
      </label>
      <label class="contrast" for="consignees_company">
        <span>Компания получателя: <sup>*</sup></span>
        <input type="text" id="consignees_company">
        <small></small>
      </label>
      <label class="contrast" for="consignees_name">
        <span>Имя получателя: <sup>*</sup></span>
        <input type="text" id="consignees_name">
        <small></small>
      </label>

      <button class="btn clean">Применить</button>
      <button class="btn clean">Сбросить</button>
    </x-row>

    <x-row class="personal-shipment-list">

      <div class="personal-shipment-header">

        <h2>Все отправления</h2>
        <label :class="{active: expand}" for="expanded">Полная версия</label>
        <input type="radio" v-model="expand" :value="true" id="expanded"/>

        <label :class="{active: !expand}" for="collapsed">Сокращенная версия</label>
        <input type="radio" v-model="expand" :value="false" id="collapsed"/>

        <a href="javascript:" class="i-xls"></a>

      </div>


    </x-row>

    <x-row class="personal-shipment-item" :class="{short: !expand}" v-for="i in 8" :key="i">
      <div class="item-top">
        <span class="item-info invoice_nr">Номер накладной: <b>E0110044487PB</b></span>
        <span class="item-info creation_date">Дата создания: <b>23.05.2022 / 09:38</b></span>
        <span class="item-info invoice_author">Автор накладной:<b>Сабаева Марина</b></span>
        <span class="item-info item-from">Откуда:<b>ООО "ТЕЛКОМНЭТ"</b></span>
        <span class="item-info item-to">Куда:<b>ООО «Малиновый рай»</b></span>



        <div class="item-informer">
          <span v-if="i%2" class="delivered">Доставлено</span>
          <span v-else class="transit">В пути</span>
        </div>

        <div class="item-inform">
          <a href="javascript:" class="item-file"></a>
          <a href="javascript:" class="item-print"></a>
        </div>

      </div>

      <div class="item-body">
        <x-row>
          <div class="item-body-aside">
            <div class="item-body-from">
              <div class="head"> Откуда:</div>
              <div class="subject">
                <b>ООО "ТЕЛКОМНЭТ"</b>
                <span>г. Москва, ул. Зеленоградская, 17</span>
              </div>
              <div class="name">Кошкина Евгения</div>
            </div>
            <div class="item-body-to">
              <div class="head">Куда:</div>
              <div class="subject">
                <b>ООО «Малиновый рай»</b>
                <span>г. Москва, ул. Зеленоградская, 17</span>
              </div>
            </div>
            <div class="name">Иванов Иван</div>
          </div>
          <div class="item-body-summary">
            <div class="head">Стоимость:</div>

            <b><small>От</small> 15 000 ₽</b>
            <button class="clean i-more" @click="$router.push({name:'DepartureItem'})">Подробнее</button>
            <button class="clean i-copy">Копировать</button>
          </div>
        </x-row>



      </div>


    </x-row>

    <x-row class="personal-shipment-item">
      <pagination></pagination>
    </x-row>

  </personal>


</template>

<script setup>

import Personal from "@/components/layouts/personal";
import XRow from "@/components/layouts/x-row";
import {ref} from "vue";
import Pagination from "@/assets/less/ui/pagination";

const expand = ref(true)

</script>

