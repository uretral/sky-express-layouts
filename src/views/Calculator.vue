<template>

  <x-header/>
  <breadcrumbs title="Рассчитать доставку"/>

  <calculator-widget/>


  <x-footer/>

</template>

<script lang="ts" setup>
import XHeader from "@/components/layouts/x-header.vue";
import XSection from "@/components/layouts/x-section.vue";
import CalculatorWidget from "@/components/ui/CalculatorWidget.vue";
import XFooter from "@/components/layouts/x-footer.vue";
import Breadcrumbs from "@/components/ui/breadcrumbs.vue";
</script>

