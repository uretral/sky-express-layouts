<template>
  <header class="personal-area">
    <div>
      <div :class="wpr">
        <input type="checkbox" id="headerNav"/>
        <label for="headerNav"></label>
        <div class="header">
          <a href="/" class="header-logo" @click="$router.push({name:'Home'})">
            <img src="@/assets/img/svg-logo.svg" alt="logo"/>
          </a>
          <a href="tel:+72222222222" class="header-tel white">
            + 7 <em>222</em> 222-22-22
            <span>Работаем круглосуточно</span>
          </a>
          <a href="javascript:" class="header-bell"></a>
          <a href="/personal" class="header-logout">Выйти</a>
        </div>

      </div>
    </div>


    <div class="personal-greeting">
      <div>
        <div class="personal-greeting-user">
          <h1>Приветствую в личном кабинете,
            <span>Иванов Иван Иванович</span>
          </h1>

          <span class="i-tel">+7 800 100 00 00</span>
          <span class="i-email">info@skyru</span>
          <button class="clean i-edit">Редактировать</button>

        </div>
        <div class="personal-greeting-tracking">
          <form>
            <label class="regular">
              <input type="text" placeholder="Введите номер заказа"/>
            </label>
            <button type="submit" class="btn acc">Отследить</button>
          </form>



        </div>
      </div>



    </div>



  </header>

</template>

<script lang="ts" setup>


</script>
