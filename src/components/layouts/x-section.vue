<template>
  <section>
    <div>
      <div :class="wpr">
        <slot></slot>
      </div>
    </div>
  </section>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'x-section',
  props: ['wpr'],
  components: {

  },
});
</script>
