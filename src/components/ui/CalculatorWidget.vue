<template>

  <x-section class="calculator-wpr">
    <div class="calculator">
      <template v-for="i in steps" :key="i.id">
        <input type="radio" :id="i.id" name="calculator"  :value="i.id" v-model="radio" />
        <label class="calculator-tab" :for="i.id" >
          <span :rel="i.nr">{{i.title}}</span>
        </label>
        <div :rel="i.id" class="calculator-item" :class="i.id" style="width:100%; order: 10">
          <component :is="i.component"/>
        </div>
      </template>

    </div>
  </x-section>

</template>

<script setup>

import {ref} from "vue";
import XSection from "@/components/layouts/x-section";
import tabCalc from "@/components/calculator/tab-calc";
import tabTariff from "@/components/calculator/tab-tariff";
import tabAdd from "@/components/calculator/tab-add";
import tabTo from "@/components/calculator/tab-to";
import tabFrom from "@/components/calculator/tab-from";
import tabCheckout from "@/components/calculator/tab-checkout";
import tabServices from "@/components/calculator/tab-services";

let radio = ref('tab-calc')

const steps = ref([
  {
    nr: '1',
    id: 'tab-calc',
    active: true,
    title: 'Калькулятор',
    isTab: 'tab',
    component: tabCalc
  },
  {
    nr: '2',
    id: 'tab-tariff',
    active: false,
    title: 'Выбрать тариф',
    isTab: 'tab',
    component: tabTariff
  },
  {
    nr: '3',
    id: 'tab-from',
    active: false,
    title: 'Откуда забрать',
    isTab: 'no-tab',
    component: tabFrom
  },
  {
    nr: '4',
    id: 'tab-to',
    active: false,
    title: 'Куда отправить',
    isTab: 'no-tab',
    component: tabTo
  },
  {
    nr: '5',
    id: 'tab-add',
    active: false,
    title: 'Добавить посылку',
    isTab: 'no-tab',
    component: tabAdd
  },
  {
    nr: '6',
    id: 'tab-services',
    active: false,
    title: 'Дополнительные услуги',
    isTab: 'no-tab',
    component: tabServices
  },
  {
    nr: '7',
    id: 'tab-checkout',
    active: false,
    title: 'Оформить заказ',
    isTab: 'no-tab',
    component: tabCheckout
  }
])

</script>
