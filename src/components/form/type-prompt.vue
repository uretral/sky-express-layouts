<template>
  <label class="i-map-point" data-type="prompt">
      <span class="type-prompt">

        <template v-if="model.length > 3">
                  <a href="javascript:" v-for="(d,k) in data" :key="k" @click="model = d">{{ d }}</a>
        </template>

      </span>
    <span class="input-wpr">
      <b>{{ placeholder }}:</b>
       <input type="text" v-model="model"/>
    </span>

  </label>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'type-prompt',
  components: {},
  props: ['placeholder'],
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
  methods: {},
});
</script>

