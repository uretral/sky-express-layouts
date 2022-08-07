<template>

  <personal>
    <breadcrumbs-inner title="Все отправления — E0110044487PB"/>


    <div class="personal-departureItem_header">
      <span class="item-info invoice_author">Накладная:<b>E0110044487PB</b></span>
      <span class="item-info invoice_author">Дата создания:<b>23.05.2022 / 09:38</b></span>
      <span class="item-info invoice_author">Автор накладной:<b>Сабаева Марина</b></span>

      <div class="item-informer">
        <span class="transit">В пути</span>
      </div>

      <div class="item-inform">
        <a href="javascript:" class="item-print"></a>
      </div>

    </div>


    <x-row class="personal-bordered">
      <h2>Отправитель</h2>
      <div class="personal-user-table">

        <div class="personal-user-row">
          <div class="personal-user-col">Название организации</div>
          <div class="personal-user-col"> ООО "ТЕЛКОМНЭТ"</div>
        </div>

        <div class="personal-user-row">
          <div class="personal-user-col">Ф.И.О.</div>
          <div class="personal-user-col">Сабаева Марина</div>
        </div>


        <div class="personal-user-row">
          <div class="personal-user-col">Номер телефона</div>
          <div class="personal-user-col">8 495 225 1000</div>
        </div>

        <div class="personal-user-row">
          <div class="personal-user-col">Юридический адрес</div>
          <div class="personal-user-col">11111111, Россия, г. Москва, ул. Зеленоградская, 17</div>
        </div>

      </div>
    </x-row>

    <x-row class="personal-bordered">
      <h2>Получатель</h2>
      <div class="personal-user-table">

        <div class="personal-user-row">
          <div class="personal-user-col">Название организации</div>
          <div class="personal-user-col"> ООО "ТЕЛКОМНЭТ"</div>
        </div>

        <div class="personal-user-row">
          <div class="personal-user-col">Ф.И.О.</div>
          <div class="personal-user-col">Сабаева Марина</div>
        </div>


        <div class="personal-user-row">
          <div class="personal-user-col">Номер телефона</div>
          <div class="personal-user-col">8 495 225 1000</div>
        </div>

        <div class="personal-user-row">
          <div class="personal-user-col">Юридический адрес</div>
          <div class="personal-user-col">11111111, Россия, г. Москва, ул. Зеленоградская, 17</div>
        </div>

      </div>
    </x-row>

    <x-row class="personal-bordered">

      <p class="tariff-title standard">
        <b>Тариф “Стандарт”</b>
        5 раб. дней, 1500₽
      </p>

      <div class="personal-departureItem_tariff" v-for="i in 2" :key="i">

        <label class="regular">
          <span>Длина, см </span>
          <input type="text" value="290"/>
        </label>

        <label class="regular">
          <span>Ширина, см </span>
          <input type="text" value="290"/>
        </label>

        <label class="regular">
          <span>Высота, см </span>
          <input type="text" value="290"/>
        </label>

        <label class="regular">
          <span>Вес, кг</span>
          <input type="text" value="до 0,5"/>
        </label>

        <label class="regular">
          <span>Объемный вес</span>
          <input type="text" value="n/a"/>
        </label>

      </div>

    </x-row>


    <x-row class="personal-bordered">
      <h2>Комментарий</h2>
      <div class="personal-departureItem_comment">
        <textarea></textarea>

      </div>
    </x-row>
    <x-row class="personal-bordered">
      <h2>Страховка</h2>
      <div class="personal-departureItem_insurance">
        <label class="regular">
          <span>Стоимость страховки:</span>
          <input type="text" value="250 ₽"/>
        </label>
      </div>
    </x-row>

  </personal>
</template>

<script setup>
import Personal from "@/components/layouts/personal";
import BreadcrumbsInner from "@/components/ui/breadcrumbs-inner";
import XRow from "@/components/layouts/x-row";
</script>
