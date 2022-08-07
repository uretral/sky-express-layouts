<template>
  <div class="package-standard" v-for="item in items" :key="item.id">
    <input type="radio" :id="item.id" v-model="model" :value="item.id" @change="updated()"/>
    <label :for="item.id" :class="{active:item.id === model}">
      <span>{{ item.title }}</span>
      {{ item.description }}
    </label>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'package-standard',
  components: {},
  data() {
    return {
      model: '',
      items: [
        {id: '25', title: 'Конверт с документами', description: '290 х 210 х 10 мм до 0,5 кг'},
        {id: '26', title: 'Коробка маленькая', description: '200 х 200 х 200 мм до 4х кг'},
        {id: '27', title: 'Коробка средняя', description: '400 х 400 х 400 мм до 4х кг'},
        {id: '28', title: 'Негабаритный груз', description: ''},
      ]
    }
  },
  methods: {
    updated(){
      this.$emit('change', this.items.find(i => i.id == this.model))
    }
  },
  mounted() {
    console.log('mounted');
  }
});
</script>

