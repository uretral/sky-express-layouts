<template>
  <div class="select" :class="{labeled: props.label}">

    <span v-show="props.label">{{ props.label }} <sup v-show="props.required">*</sup></span>

    <input type="text" v-model="val" :placeholder="props.placeholder"/>
    <input type="checkbox" :id="props.name" v-model="open"/>
    <label class="select-flag" :for="props.name"></label>
    <div class="options">
      <div class="option" v-for="item in props.data" :key="item.id">
        <input type="radio" :id="item.id" v-model="model" :value="item.id" @change="onChange()"/>
        <label :for="item.id" :class="{active:item.id === model}">
          <span>{{ item.title }}</span>
          {{ item.desc }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>

import {defineProps, ref} from "vue";

const props = defineProps({
  data: Object,
  placeholder: String,
  name: String,
  label: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})

const model = ref('')
const val = ref('')
const open = ref(false)

const onChange = () => {
  let ob = props.data.find(i => i.id === model.value)
  val.value = ob ? ob.title : ''
  open.value = false
}
</script>

