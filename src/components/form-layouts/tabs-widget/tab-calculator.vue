<template>
  <h3>Калькулятор стоимости доставки</h3>
  <fieldset>

    <type-prompt placeholder="Откуда"/>
    <type-prompt placeholder="Куда"/>

    <type-package placeholder="Размер посылки"/>

  </fieldset>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TypePrompt from "@/components/form/type-prompt.vue";
import TypePackage from "@/components/form/type-package.vue";

export default defineComponent({
  name: 'tab-calculator',
  components: {TypePackage, TypePrompt},
  data() {
    return {}
  },
  methods: {},
  mounted() {
    console.log('mounted');
  }
});
</script>

