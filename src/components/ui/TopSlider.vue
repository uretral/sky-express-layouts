<template>
  <div class="topSlider">
    <div class="topSlider-dots">
      <div v-for="(i,k) in slides" class="topSlider-dot"
           :class="{active : k === currentSlideIndex}"
           @click="currentSlideIndex = k"
           :key="k"/>
    </div>

    <cite v-html="currentSlide().cite"/>
    <button v-text="currentSlide().btn" class="btn clean"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'top-slider',
  components: {},
  props: ['slides'],
  data() {
    return {
      currentSlideIndex: 0,
    }
  },
  methods: {
    currentSlide() {
      return this.slides[this.currentSlideIndex]
    },
    next() {
      if (this.currentSlideIndex + 1 < this.slides.length) {
        this.currentSlideIndex++
      } else {
        this.currentSlideIndex = 0
      }
    },
    slider() {
      setInterval(() => this.next(), 5000)
    }
  },
  mounted() {
    this.slider()
  }
});
</script>
