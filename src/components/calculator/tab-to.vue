<template>

  <div class="from-to-wpr">

    <h3>Куда отправить</h3>

    <label v-for="item in tabFrom" class="regular" :class="item.type" :key="item.id" :for="item.id">
      <span>{{item.label}} <sup v-show="item.required">*</sup></span>
      <template  v-if="item.type === 'select'">
        <input type="text" :placeholder="item.placeholder" :id="item.id"/>
        <em>
          <i v-for="i in cities" :key="i">{{i}}</i>
        </em>
      </template>
      <input v-else :type="item.type" :placeholder="item.placeholder" :id="item.id"/>

      <small>{{item.hint}}</small>

    </label>

    <button class="accent">Подтвердить</button>

  </div>

</template>

<script lang="ts" setup>
import {ref} from "vue";

const tabFrom = ref([
  {id: 'city', type: 'select', label: 'Населенный пункт', required: true, placeholder: 'г. Москва', hint:'Например: Москва, Волгоград и т.д.'},
  {id: 'street', type: 'text', label: 'Улица', required: true, placeholder: 'ул. Дибуновская', hint:''},
  {id: 'building', type: 'text', label: 'Дом', required: true, placeholder: '', hint:''},
  {id: 'corpus', type: 'text', label: 'Корпус', required: false, placeholder: '', hint:''},
  {id: 'block', type: 'text', label: 'Строение', required: false, placeholder: '', hint:''},
  {id: 'apartment', type: 'text', label: 'Квартира/офис', required: false, placeholder: '', hint:''},
  {id: 'name', type: 'text', label: 'Имя', required: true, placeholder: '', hint:''},
  {id: 'phone', type: 'phone', label: 'Телефон', required: true, placeholder: '', hint:''},
  {id: 'email', type: 'email', label: 'E-mail', required: false, placeholder: '', hint:''},
])

const cities = ref(['Москва','Санкт-Петербург','Новосибирск','Екатеринбург','Нижний Новгород','Самара'])

</script>
