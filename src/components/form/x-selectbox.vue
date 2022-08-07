<template>
  <label class="selectbox contrast">
    <input type="text" v-model="model" :placeholder="props.placeholder" autocomplete="nope"/>
    <em>
      <i v-for="a in l" :key="'--'+a" @click="focusOut(a)">{{a}}</i>
    </em>

  </label>

</template>

<script setup>

import {defineProps, ref} from "vue"
const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  }
})
const model = ref('')
const options = ref('')


const focusOut = (value) => {
  model.value = value
  // options.value = ''
}
const focusIn = () => options.value = 'open'


const l = ref([
  " Сербия (до 30 дней)",
  " Таиланд (до 30 дней)",
  " Тринидад и Тобаго (до 90 дней)",
  " Тунис (до 14 дней)",
  " Турция (до 60 дней)",
  " Узбекистан",
])

</script>
