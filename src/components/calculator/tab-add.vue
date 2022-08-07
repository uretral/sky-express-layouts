<template>

  <div class="tab-add-cases">

    <div class="tab-add-modal">
      <button class="accent dark" @click="open = true">
        <span class="i-add-circle white">Добавить посылку</span>
      </button>

      <div class="tab-add-modal-frame" v-show="open">

        <div class="tab-add-modal-box">

          <a href="javascript:" class="tab-add-modal-close" @click="open = false"></a>

          <div class="modal-box tab-add-modal-cases">
            <b>Добавить посылку</b>

            <x-select placeholder="Точные размеры" :data="cases" :required="true" label="Размер посылки" name="add-package"/>

            <label v-for="item in switch_form" class="regular " :class="{'hint-inset': item.hint}" :key="item.id"
                   :for="item.id">
              <span>{{ item.label }} <sup v-show="item.required">*</sup></span>
              <input :type="item.type" :placeholder="item.placeholder" :id="item.id"/>

            </label>


            <button class="accent btn">
              <span class="i-add-circle">Добавить</span>
            </button>



          </div>

        </div>


      </div>


    </div>


    <h3>Добавить посылку</h3>

    <a href="javascript:" class="tab-add-top"></a>

    <div class="tab-add-switch">

      <template v-for="item in cases" :key="item.id">
        <input type="radio" :id="'tab-add-switch'+item.id" :value="item.id" v-model="package_type"/>
        <label :for="'tab-add-switch'+item.id" class="tab-add-switch-label">
          <b>{{ item.title }}</b>
          <span>{{ item.desc }} <em>{{ item.weight }}</em></span>
        </label>
      </template>

      <div class="tab-add-switch-form" v-show="package_type === 'box-custom'">

        <label v-for="item in switch_form" class="regular " :class="{'hint-inset': item.hint}" :key="item.id"
               :for="item.id">
          <span>{{ item.label }} <sup v-show="item.required">*</sup></span>
          <input :type="item.type" :placeholder="item.placeholder" :id="item.id"/>
          <small v-if="item.hint" :rel="item.hint"></small>
        </label>

        <button class="accent btn">
          <span class="i-add-circle">Добавить посылку</span>
        </button>

      </div>

    </div>


    <div class="tab-add-manage">
      <table class="tab-add-table">

        <thead>
        <tr>
          <th><span>№</span></th>
          <th><span>Тип</span></th>
          <th><span>Размеры</span></th>
          <th><span>Вес</span></th>
          <th colspan="2"><span>Объемный вес</span></th>

        </tr>
        </thead>

        <tbody>
        <tr v-for="row in tbl" :key="row.col1">
          <td>
            <button><span>{{ row.col1 }}</span></button>
          </td>
          <td><span>{{ row.col2 }}</span></td>
          <td><span>{{ row.col3 }}</span></td>
          <td><span>{{ row.col4 }}</span></td>
          <td><span>{{ row.col5 }}</span></td>
          <td>
            <button>Удалить</button>
          </td>
        </tr>
        </tbody>

        <tfoot>
        <tr>
          <th colspan="3"></th>
          <th><b>Итого</b></th>
          <th>3000₽</th>
          <th></th>
        </tr>
        </tfoot>

      </table>

      <div class="tab-add-manage_btn">
        <button class="copy"><span class="i-copy">Копировать последнию посылку</span></button>
        <button class="remove"><span class="i-remove">Удалить все посылки</span></button>
      </div>

      <div class="tab-add-manage_text">
        <b>Уважаемые клиенты!</b>
        <p>
          Расчёт стоимости доставки произведен на основании введённых Вами данных. Если Вы указали параметры отправления
          приблизительно – не беда, мы произведем на сортировочном пункте повторные замеры и в случае расхождения с
          Вашими данными, зафиксируем данные измерений. Если Вам понадобится подтверждение наших расчетов, Вы можете
          бесплатно заказать их в течении 7 дней после оформления заказа через форму обратной связи. Просим Вас с
          пониманием отнестись к нашей просьбе доплатить разницу, если вес Вашего отправления окажется больше, чем Вы
          указали
        </p>
      </div>


      <cite class="warn">
        Не считая дня забора
      </cite>


    </div>

  </div>

</template>

<script setup>

import {ref} from "vue";
import XSelect from "@/components/form-layouts/x-select";

const package_type = ref('envelope')
const cases = ref([
  {id: 'box-envelope', title: 'Конверт с документами', desc: '290 х 210 х 10 мм ', weight: 'до 0,5 кг'},
  {id: 'box-s', title: 'Коробка маленькая', desc: '200 х 200 х 200 мм ', weight: 'до 4х кг'},
  {id: 'box-x', title: 'Коробка средняя', desc: '400 х 400 х 400 мм ', weight: 'до 4х кг'},
  {id: 'box-light', title: 'Негабаритный груз', desc: '', weight: ''},
  {id: 'box-custom', title: 'Точный размер', desc: '', weight: ''},
])

const switch_form = ref([
  {id: 'name', type: 'text', label: 'Длина, см', required: true, placeholder: '290 мм', hint: ''},
  {id: 'name', type: 'text', label: 'Ширина, см', required: true, placeholder: '210 мм', hint: ''},
  {id: 'name', type: 'text', label: 'Высота, см', required: true, placeholder: '10 мм', hint: ''},
  {id: 'name', type: 'text', label: 'Вес, кг', required: true, placeholder: 'до 0,5 кг', hint: ''},
  {
    id: 'name', type: 'text', label: 'Объемный вес', required: true, placeholder: 'n/a', hint: `Объемный вес рассчитывается путем умножения длины
в сантиметрах на ширину в сантиметрах на длину в сантиметрах.`
  },
])


const tbl = ref([
  {
    col1: '1',
    col2: 'Конверт с документами',
    col3: '200 x 100 x 10 мм',
    col4: '20 кг',
    col5: 'n/a'
  },
  {
    col1: '2',
    col2: 'Коробка средняя',
    col3: '400 x200 x 10 мм',
    col4: '60 кг',
    col5: 'n/a'
  }
])

const open = ref(false)

</script>

