<template>
  <div class="pop-departures-title">
    <h2>Популярные отправления</h2>
  </div>
  <div class="pop-departures-items">
    <div class="pop-departures-wpr">
      <div class="pop-departures-item" v-for="i in 3" :key="i">
        <span><b>От </b>г. Москвы</span>
        <span><b>до</b> г. Санкт-Петербург</span>
        <p><small>От</small> 600 ₽</p>
      </div>
    </div>

    <div class="blockSlider">
      <button class="blockSlider-btn next"></button>
      <button class="blockSlider-btn prev"></button>
    </div>

  </div>
</template>

<script setup>

</script>
