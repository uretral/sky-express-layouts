<template>
  <div data-type="package">

    <input type="checkbox" id="package"/>
    <label class="type-package i-chevron" for="package">{{ model }}</label>
    <div class="package-wpr">
      <div class="package-tabs">
        <button v-for="tab in tabs" :key="tab.name"
                class="package-tab" :class="{active:tab.name === currentTab}"
                v-html="tab.title"
                @click="currentTab = tab.name"
        />
      </div>

      <div class="package-body">

        <keep-alive>
          <component :is="currentTab" @change="updated"/>
        </keep-alive>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PackageCustom from "@/components/form-layouts/type-package/package-custom.vue";
import PackageStandard from "@/components/form-layouts/type-package/package-standard.vue";


export default defineComponent({
  name: 'type-package',
  components: {PackageStandard, PackageCustom},
  props: ['placeholder'],
  data() {
    return {
      model: '',
      currentTab: 'PackageStandard',
      tabs: [
        {title:'Примерно', name: 'PackageStandard'},
        {title:'Точные размеры', name: 'PackageCustom'}
      ],
    }
  },
  methods: {
    updated(val:{title:string}){
      console.log(val);
        this.model = val.title
    }
  },
  mounted() {
    this.model = this.placeholder
  }
});
</script>

