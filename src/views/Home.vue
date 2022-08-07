<template>
  <x-header/>
  <x-section class="main">

    <div class="main-slider">
      <top-slider :slides="slides"/>
    </div>
    <div class="main-widgets">
      <tabs-widget/>
    </div>
  </x-section>

  <x-section class="pop-departures">
    <pop-blocks/>
  </x-section>

  <x-section class="easy">
    <div class="easy-departure">
      <img src="../assets/img/departure.svg" alt="departure"/>
      <div class="easy-departure-title">
        <h2>Отправить посылку легко!</h2>
        <span>Как рассчитать сроки и стоимость доставки с помощью калькулятора?</span>
      </div>
      <x-inner-row class="easy-departure-steps">

        <div class="easy-departure-step" v-for="step in departureStep" :key="step.step">
          <b>{{ step.step }}</b>
          <span>
           {{ step.text }}
          </span>
        </div>

      </x-inner-row>
    </div>

    <div class="easy-courier">

      <h2>Вызовите курьера <br/> в Москве, он:</h2>

      <x-inner-row>
        <div class="easy-courier-step" v-for="step in courier" :key="step">
          <div class="easy-courier-step_icon">
            <img src="../assets/img/icons/courier-step.svg" alt="courier-step"/>
          </div>
          <div class="easy-courier-step_info">{{ step }}</div>
        </div>
      </x-inner-row>
    </div>


  </x-section>


    <x-section class="express-delivery">
      <div class="express-delivery-title">
        <h2>Экспресс-доставка, доступная каждому</h2>
        <button class="btn">Вызвать курьера</button>
      </div>


      <x-inner-row>

        <div class="express-delivery-service" v-for="(service,key) in express" :key="key">
          <div class="express-delivery-service_icon">
            <img :src="require(`../assets/img/icons/express/${key+1}.svg`)" alt="service"/>
          </div>
          <span>{{ service }}</span>
        </div>

      </x-inner-row>

    </x-section>


    <x-section class="top-actions">
      <div class="top-action-insurance">
        <div class="top-action-insurance_header">
          <h2>Страхование грузов и посылок</h2>
          <img src="../assets/img/shield.png" alt="shield"/>
        </div>

        <p>Все посылки и грузы отправляемые через Скай Экспресс могут быть застрахованы. Спите спокойно, страховка
          сохранит ваши заказы. Страхование покрывает повреждение или утрату груза
          <br/> или посылки.</p>

        <button class="btn">Узнать больше</button>

      </div>
      <div class="top-action-discount">
        <top-slider :slides="slides"/>
      </div>

    </x-section>










    <x-section class="advantages">
      <div class="advantages-body">
        <div class="advantages-header">

          <h2>Курьерская доставка от компании «Скай Экспресс» — это надежность, скорость и доступные цены. </h2>
        </div>
        <x-inner-row>
          <div class="advantages-content">

            <p>Вам нужна доставка по Москве, доставка по России или доставка по миру, срочная доставка или сверхсрочная
              доставка – мы рядом, чтобы помочь.</p>
            <p>Вы можете передать свое отправление в один из наших офисов (гиперссылка) или вызвать курьера (гиперссылка)
              домой либо в офис.</p>
            <p>Рассчитать стоимость доставки можно на странице калькулятора (гиперссылка), а оформить заказ -
              непосредственно в офисе (гиперссылка) или на странице оформления заказа (гиперссылка).</p>

          </div>

          <div class="advantages-content">
            <p>Мы любим и ценим каждого своего клиента и поэтому уверены, что Вы останетесь довольны нашей работой,</p>
            <p> Доставим все, кроме неприятностей.</p>
          </div>
        </x-inner-row>

      </div>
    </x-section>

  <x-footer/>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import XHeader from "@/components/layouts/x-header.vue";
import XSection from "@/components/layouts/x-section.vue";
import TopSlider from "@/components/ui/TopSlider.vue";
import TabsWidget from "@/components/ui/TabsWidget.vue";
import XInnerRow from "@/components/layouts/x-inner-row.vue";
import XFooter from "@/components/layouts/x-footer.vue";
import PopBlocks from "@/components/ui/PopBlocks.vue";

export default defineComponent({
  name: 'Home',
  components: {
    PopBlocks,
    XInnerRow,
    XFooter,
    TabsWidget,
    TopSlider,
    XSection,
    XHeader,
  },
  data() {
    return {
      slides: [
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 20%</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Отправь посылку сегодня и получи до <span class="accent">50% скидку</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 40%</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 50%</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 60%</span>'
        },
        {
          btn: 'Вызвать курьера',
          action: '',
          cite: 'Экспресс-доставка посылок и грузов <span class="accent">со скидкой 70%</span>'
        },
      ],
      departureStep: [
        {step: '1', text: 'Укажите город отправки и город получения, размер отправления.'},
        {step: '2', text: 'Выберите лучший вариант доставки.'},
        {step: '3', text: 'Оплатите отправление любым удобным способом'},
      ],
      courier: [
        'заберет посылку или документы;',
        'самостоятельно проведет измерения посылки;',
        'упакует отправление;',
        'заполнит все необходимые бумаги;',
        'выдаст чек и номер отслеживания;',
      ],
      express: [
        'Все отправления можно отслеживать в личном кабинете',
        'Бесконтактная курьерская доставка',
        'Сверхсрочная доставка по Москве',
        'Современный транспорт, собственные курьеры, авиаперевозки',
        'Доставляем более чем в 130 000 населенных пунктов в России',
        'Оплата любым удобным способом',
        'Бесплатная упаковка любого отправления',
        'Забор из любой точки мира и доставка в Москву',
      ],
    }
  },
  methods: {},
  mounted() {
    console.log('cdc');

  }
});
</script>







