<template>
  <div class="package-custom">

    <label class="regular">
      <span>Длина, мм <sup>*</sup></span>
      <input type="number" class="light" v-model="length" placeholder="290 мм"/>
    </label>

    <label class="regular">
      <span>Ширина, мм <sup>*</sup></span>
      <input type="number" class="light" v-model="width" placeholder="210 мм"/>
    </label>

    <label class="regular">
      <span>Высота, мм <sup>*</sup></span>
      <input type="number" class="light" v-model="height" placeholder="10 мм"/>
    </label>

    <label class="regular">
      <span>Вес, кг <sup>*</sup></span>
      <input type="number" class="light" v-model="weight" placeholder="до 0,5 кг"/>
    </label>


    <button class="accent" @click="submitForm()">Применить</button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'package-custom',
  components: {},
  data() {
    return {
      length: '',
      width: '',
      height: '',
      weight: '',
    }
  },
  methods: {
    submitForm() {
      this.$emit('change', {title: `${this.length}мм x ${this.width}мм x ${this.height}мм x ${this.weight}кг`} )
      this.$emit('close')
    }
  }
});
</script>

