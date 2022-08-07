<template>
<div class="uimenu">
  <ul v-if="routes">
    <li v-for="route in routes" :key="route.name">
      <router-link :to="{name:route.name}" v-text="route.name"/>
      <ul v-if="route.children" >
        <li v-for="child in route.children" :key="child.name">
          <router-link :to="{name:child.name}" v-text="child.name"/>
        </li>
      </ul>
    </li>

  </ul>
</div>
</template>

<script>
export default {
  name: "ui-menu",
  data() {
    return {
      routes: []
    }
  },
  mounted() {
    this.routes = this.$router.options.routes
    console.log(this.routes);
  }
}
</script>

<style lang="less" scoped>
.uimenu {
  display: block;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100000;

  width: 20px;
  height: 20px;
  overflow: hidden;
  background: red;
  &:hover {

    overflow: visible;
    background: unset;
  }


  * {
    box-sizing: border-box;
  }
  a {
    display: block;
    text-decoration: none;
    padding: 3px 10px;
    background: #fff;
    width: 100%;
    &.router-link-active {
      background: red;
      color: #fff;
    }
  }
  > ul {
    width: 100px;
    border: 1px solid gray;
    > li {
      display: block;
      position: relative;
      background: white;
      padding: 3px 10px;
      width: 100%;
      &:hover {
        > ul {
          display: block;
        }
      }
      > ul {
        display: none;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 96px;
        border: 1px solid gray;
        background: #fff;
        >  li {
          display: inline-block;
          padding: 3px 10px;
        }
      }
    }
  }
}

</style>
