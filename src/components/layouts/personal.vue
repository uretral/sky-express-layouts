<template>
  <x-header-personal/>
  <x-section class="personal-wpr">
    <div class="personal-menu">
      <button class="accent">Сделать заказ</button>
      <button class="btn clean">Заказать конверты и пакеты</button>

      <nav>
        <router-link :to="{name:'User'}"><span>Личные данные</span></router-link>
        <router-link :to="{name:'Departures'}"><span>Все отправления</span></router-link>
        <router-link :to="{name:'AddressBook'}"><span>Адресная книга</span></router-link>
        <router-link :to="{name:'Calculator'}"><span>Калькулятор</span></router-link>
        <router-link :to="{name:'Docs'}"><span>Документы</span></router-link>
      </nav>

      <slot name="personal-menu"></slot>

    </div>
    <div class="personal-body">
      <slot></slot>
    </div>
  </x-section>
  <x-footer/>
</template>



<script setup>
import XHeaderPersonal from "@/components/layouts/x-header-personal";
import XSection from "@/components/layouts/x-section";
import XFooter from "@/components/layouts/x-footer";
</script>
