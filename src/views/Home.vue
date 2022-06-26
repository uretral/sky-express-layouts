<template>
  <x-header/>
  <x-section class="main">

    <div class="main-slider">
      <top-slider :slides="slides"/>
    </div>
    <div class="main-widgets">
      <tabs-widget/>
    </div>

  </x-section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import XHeader from "@/components/layouts/x-header.vue";
import XSection from "@/components/layouts/x-section.vue";
import TopSlider from "@/components/ui/TopSlider.vue";
import TabsWidget from "@/components/ui/TabsWidget.vue";

export default defineComponent({
  name: 'Home',
  components: {
    TabsWidget,
    TopSlider,
    XSection,
    XHeader,
  },
  data() {
    return {
      slides: [
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 20%</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 30%</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 40%</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 50%</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 60%</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 70%</span>'
        },
      ]

    }
  },
  methods: {

  },
  mounted() {
    console.log('cdc');

  }
});
</script>
