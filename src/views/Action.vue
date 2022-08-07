<template>
  <x-header/>
  <breadcrumbs title="Экспресс-доставка посылок и грузов со скидкой 20%"/>

  <x-section class="action-page">

      <div class="action-page-content">
        <span class="date">10.12.2021</span>
        <h1>Экспресс-доставка посылок и грузов со скидкой 20%</h1>

        <p>Быстро доставляем, а цену снижаем!</p>

        <p>
          <b>Экспресс-доставка по новой цене:</b>
          снижение тарифов до 30% + скидка 10% для новых клиентов до конца декабря"
        </p>

        <button class="accent">Стать участником</button>

      </div>
      <div class="action-page-img">
        <div class="action-page-img-nest">
          <img :src="require('@/assets/img/action5.jpg')" alt="sea"/>
        </div>
      </div>

  </x-section>

  <x-footer/>


</template>

<script setup>
import XHeader from "@/components/layouts/x-header";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import XSection from "@/components/layouts/x-section";
import XFooter from "@/components/layouts/x-footer";
</script>
