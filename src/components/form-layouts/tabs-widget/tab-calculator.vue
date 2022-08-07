<template>
  <h3>Калькулятор стоимости доставки</h3>
  <fieldset>

    <type-prompt placeholder="Откуда"/>
    <div class="change-holder">
      <button class="clean change"></button>
    </div>
    <type-prompt placeholder="Куда"/>

    <type-package placeholder="Размер посылки"/>

    <button class="accent">Рассчитать стоимость доставки</button>

  </fieldset>



</template>

<script lang="ts" setup>
import TypePrompt from "@/components/form/type-prompt.vue";
import TypePackage from "@/components/form/type-prompt-select.vue";


</script>

