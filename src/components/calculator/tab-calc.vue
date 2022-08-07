<template>

  <tab-calculator/>

  <x-inner-row class="tab-calc-departures">
    <pop-blocks/>
  </x-inner-row>

</template>

<script>
import TabCalculator from "@/components/form-layouts/tabs-widget/tab-calculator";
import XInnerRow from "@/components/layouts/x-inner-row";
import PopBlocks from "@/components/ui/PopBlocks";
export default {
  name: "tab-calc",
  components: {PopBlocks, XInnerRow, TabCalculator}
}
</script>

