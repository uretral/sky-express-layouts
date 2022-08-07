<template>

    <div class="breadcrumbs-inner">
      <a href="javascript:" @click="$router.back()">Вернуться</a>
      <span>{{props.title}}</span>
    </div>

</template>

<script setup>

import XRow from "@/components/layouts/x-row";
import {defineProps} from "vue";

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})


</script>
