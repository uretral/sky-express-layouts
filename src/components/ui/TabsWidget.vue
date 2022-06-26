<template>
  <div class="tabsWidget">
    <div class="tabsWidget-tabs">
      <button v-for="component in components"
              :class="{active: component.name === currentComponent}"
              v-text="component.title"
              @click="currentComponent = component.name"
              :key="component.title"/>
    </div>
    <div class="tabsWidget-body">
      <component :is="currentComponent"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabCalculator from "@/components/form-layouts/tabs-widget/tab-calculator.vue";
import TabTracking from "@/components/form-layouts/tabs-widget/tab-tracking.vue";


export default defineComponent({
  name: 'tabs-widget',
  components: {
    TabCalculator, TabTracking,
  },
  data() {
    return {
      currentComponent: 'TabCalculator',
      components:[
        {title:'Калькулятор', name: 'TabCalculator'},
        {title:'Отследить посылку', name: 'TabTracking'}]
    }
  },
  methods: {},
  mounted() {
    console.log('mounted');
  }
});
</script>

