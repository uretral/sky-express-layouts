<template>
  <div data-type="promptSelect" v-click-outside="clickOutside">

    <input type="checkbox" class="promptSelect-chb" id="package" v-model="active" />
    <label class="promptSelect-trigger " :class="active ? 'i-chevron' : 'i-chevron-bottom' "  for="package">{{ model }}</label>

    <div class="promptSelect-wpr">
      <div class="promptSelect-tabs">
        <button v-for="tab in tabs" :key="tab.name"
                class="promptSelect-tab" :class="{active:tab.name === currentTab}"
                v-html="tab.title"
                @click="currentTab = tab.name"
        />
      </div>

      <div class="promptSelect-body">

          <component :is="currentTab" @change="updated" @close="active = false"/>

      </div>

    </div>

  </div>
</template>

<script >
import {defineComponent} from 'vue';
import PackageCustom from "@/components/form-layouts/type-package/package-custom.vue";
import PackageStandard from "@/components/form-layouts/type-package/package-standard.vue";

import vClickOutside from "click-outside-vue3"

export default defineComponent({
  name: 'type-prompt-select',
  components: {PackageStandard, PackageCustom},
  props: ['placeholder'],
  data() {
    return {
      active: false,
      model: '',
      currentTab: 'PackageStandard',
      tabs: [
        {title:'Примерно', name: 'PackageStandard'},
        {title:'Точные размеры', name: 'PackageCustom'}
      ],
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    updated(val){
      console.log(val);
        this.model = val.title
    },
    clickOutside(){
      this.active = false
    }
  },
  mounted() {
    this.model = this.placeholder
  }
});
</script>

