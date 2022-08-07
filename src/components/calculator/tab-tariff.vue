<template>
  <h3>Выберите тариф</h3>


  <x-inner-row class="tab-tariff-switcher">

    <template v-for="t in tariffs" :key="t.id">
      <input type="radio" name="tariff" :id="t.id" :value="t.id" v-model="tariff">

      <label :for="t.id">
        <b>{{ t.title }}</b>
        <span>{{ t.desc }}</span>
      </label>

    </template>

  </x-inner-row>

  <button class="accent">Подтвердить</button>



</template>

<script lang="ts" setup>
import XInnerRow from "@/components/layouts/x-inner-row.vue";
import {ref} from "vue";
import PopBlocks from "@/components/ui/PopBlocks.vue";

const tariff = ref('standard')

const tariffs = ref([
  {id: 'standard', title: 'Стандарт', desc: '5 раб. дней*, 1500₽'},
  {id: 'express', title: 'Экспресс', desc: '3 раб. дня*, 3500₽'},
  {id: 'express-plus', title: 'Экспресс-плюс', desc: '2 раб. дня*, 4500₽'}
])

</script>

