<template>
  <div class="row" :class="cls">
    <div>
      <div :class="wpr">
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'x-footer',
  props: ['wpr','cls'],
  components: {

  },
});
</script>
