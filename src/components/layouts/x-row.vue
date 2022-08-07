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
  name: 'x-row',
  props: ['wpr','cls'],
  components: {

  },
});
</script>
