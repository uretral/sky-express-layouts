<template>
  <label data-type="prompt" v-click-outside="clickOutside">
    <span class="prompt-wpr">
      <template v-if="model.length > 3">
                <a href="javascript:" v-for="(d,k) in data" :key="k" @click="model = d">{{ d }}</a>
      </template>
    </span>

    <span class="placeholder i-map-point mid">
      <b>{{ placeholder }}:</b>
       <input type="text" class="thin" v-model="model"/>
    </span>

  </label>
</template>

<script lang="js">
import {defineComponent} from 'vue';
import vClickOutside from "click-outside-vue3"

export default defineComponent({
  name: 'type-prompt',
  components: {},
  props: ['placeholder'],
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      model: '',
      data: [
        'г. Москва, ул. Зеленоградск ...',
        'г. Москва, ш. Дмитровское, 102 ...',
        'г. Москва, ул. Зеленоградск ...',
        'г. Москва, ш. Дмитровское, 102 ...',
        'г. Москва, ул. Зеленоградск ...',
        'г. Москва, ш. Дмитровское, 102 ...',
        'г. Москва, ул. Зеленоградск ...',
        'г. Москва, ш. Дмитровское, 102 ...',
      ]
    }
  },
  methods: {
    clickOutside() {
      console.log('');
    }
  },
});
</script>

