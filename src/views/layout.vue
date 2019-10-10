<template>
  <a-layout class="xy-layout">
    <a-layout-header class="layout-header">
      <div class="header-logo">logo</div>
      <div class="header-right">
        <a-input-search
          class="header-search"
          placeholder="搜索"
          @search="onSearch"
        />

        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['1']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item 
            v-for="(route, routeIndex) in childrenRoutes"
            :key="routeIndex"
            @click="$router.push(route.name)"
          >
          {{ route.meta.title }}</a-menu-item>
        </a-menu>
      </div>
    </a-layout-header>
    
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>

    <a-layout-footer style="text-align: center">
      Xy 业务组件
    </a-layout-footer>
  </a-layout>
</template>

<script>
import childrenRoutes from '@/router/children'

export default {
  data() {
    return {
      childrenRoutes,
    }
  },

  methods: {
    onSearch() {
      console.log('search')
    },
  },
}
</script>


<style lang="less" scoped>
.xy-layout {
  .layout-header {
    display: flex;
    justify-content: space-between;
    .header-logo {
      width: 120px;
      height: 30px;
      margin: 15px 0;
      line-height: 30px;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }
    .header-right {
      display: flex;
      .header-search {
        width: 200px;
        border-radius: 5px;
        margin: 15px 30px
      }
    }
  }
}
</style>

