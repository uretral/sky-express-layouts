<template>
  <x-section class="breadcrumbs">
    <div class="breadcrumbs-links">
      <a href="javascript:">Главная</a>
      <i></i>
      <span>{{props.title}}</span>
    </div>
    <div class="breadcrumbs-back">

      <a href="javascript:">Вернуться назад</a>

    </div>
  </x-section>
</template>

<script setup>

import {defineProps} from "vue";
import XSection from "@/components/layouts/x-section";

const props = defineProps({
  title: String
})

</script>
