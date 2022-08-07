<template>
  <h3>Оформить заказ</h3>

  <div class="tab-checkout-wpr">
    <div class="tab-checkout-departures">

      <div class="departure" :class="{on : one}">
        <div class="departure-btn">
          <div class="departure-btn-name">
            Отправление #1
          </div>
          <button v-if="!one" class="btn more" @click="one = 'on'">Узнать больше</button>
          <button class="btn delete">Удалить</button>
        </div>
        <div class="departure-wpr first">
          <div class="departure-from">
            <b> г. Москва, ул. Зеленоградская, 17</b>
          </div>
          <div class="departure-mid"></div>
          <div class="departure-to">
            <b>г. Москва, ш. Дмитровское, 102, корпус 2б</b>
          </div>
        </div>

        <div class="departure-wpr ops">
          <div class="departure-from">
            <p class="departure-more"><em>Срок доставки</em><span>3 раб. дня</span></p>
          </div>
          <div class="departure-mid"></div>
          <div class="departure-to">
            <p class="departure-more"><em>Передать курьеру</em><span>250 ₽</span></p>
            <p class="departure-more"><em>Стоимость отправления</em><span>1000 ₽</span></p>
            <p class="departure-more"><em>Стоимость страхования</em><span>200 ₽</span><button class="clean"/></p>
            <p class="departure-more"><em>Стоимость упаковки</em><span>0 ₽</span><button class="clean"/></p>
          </div>
        </div>

      </div>

      <div class="departure" :class="{on : two}">
        <div class="departure-btn">
          <div class="departure-btn-name">
            Отправление #2
          </div>
          <button v-if="!two" class="btn more" @click="two = 'on'">Узнать больше</button>
          <button class="btn delete">Удалить</button>
        </div>
        <div class="departure-wpr first">
          <div class="departure-from">
            <b> г. Москва, ул. Зеленоградская, 17</b>
          </div>
          <div class="departure-mid"></div>
          <div class="departure-to">
            <b>г. Москва, ш. Дмитровское, 102, корпус 2б</b>
          </div>
        </div>

        <div class="departure-wpr ops">
          <div class="departure-from">
            <p class="departure-more"><em>Срок доставки</em><span>3 раб. дня</span></p>
          </div>
          <div class="departure-mid"></div>
          <div class="departure-to">
            <p class="departure-more"><em>Передать курьеру</em><span>250 ₽</span></p>
            <p class="departure-more"><em>Стоимость отправления</em><span>1000 ₽</span></p>
            <p class="departure-more"><em>Стоимость страхования</em><span>200 ₽</span><button class="clean"/></p>
            <p class="departure-more"><em>Стоимость упаковки</em><span>0 ₽</span><button class="clean"/></p>
          </div>
        </div>

      </div>

    </div>
    <div class="tab-checkout-save">

      <button class="btn">Сохранить и сделать новый расчет</button>
      <button class="accent">Сделать заказ, 3600₽</button>


    </div>
  </div>

</template>

<script setup>

import {ref} from "vue";

const one = ref('')
const two = ref('')
</script>

