<template>
  <h3>Отследить заказ</h3>

  <fieldset class="tab-tracking">

    <label >
      <input class="regular" type="number"/>
    </label>

    <button class="accent"> Отследить</button>

    <cite class="question">
      <a href="javascript:">Войдите</a>, чтобы видеть историю ваших отправлений. <b> Так же при регистрации вы получаете
      бонусы.</b>
    </cite>

  </fieldset>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'tab-tracking',
  components: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {
    console.log('mounted');
  }
});
</script>

