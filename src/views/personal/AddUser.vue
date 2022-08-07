<template>

  <personal>
    <x-row class="personal-border">
      <div class="personal-user">
        <h2>Личные данные</h2>

      </div>
    </x-row>


    <x-row class="personal-border">
      <div class="personal-user-table">

        <div class="personal-user-row">
          <div class="personal-user-col">Ф.И.О.</div>
          <div class="personal-user-col">Сабаева Марина (Физ. лицо)</div>
        </div>

        <div class="personal-user-row">
          <div class="personal-user-col">E-mail</div>
          <div class="personal-user-col">msabaeva@telcomnet.su
            <button class="pen clean"></button>
          </div>
        </div>

        <div class="personal-user-row">
          <div class="personal-user-col">Номер телефона (Логин)</div>
          <div class="personal-user-col">8 495 225 1000</div>
        </div>

        <div class="personal-user-row">
          <div class="personal-user-col">Адрес забора</div>
          <div class="personal-user-col">11111111, Россия, г. Москва, ул. Зеленоградская, 17
            <button class="pen clean"></button>
          </div>
        </div>

        <div class="personal-user-row">
          <div class="personal-user-col">Баланс</div>
          <div class="personal-user-col"><b>200 ₽</b></div>
        </div>

      </div>
    </x-row>


  </personal>
</template>

<script setup>
import Personal from "@/components/layouts/personal";
import XRow from "@/components/layouts/x-row";
</script>
