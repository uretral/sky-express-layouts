<template>
  <footer>
    <div>
      <div :class="wpr">
        <slot></slot>
      </div>
    </div>
  </footer>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'x-footer',
  props: ['wpr'],
  components: {

  },
});
</script>
