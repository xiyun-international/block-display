<template>
  <div class="xy-block">
    <div class="block-banner"></div>
    <div class="block-content">
      <a-card class="content-search">
        <tag-select
          :options="typeOptions"
          @confirm="changeTag"
        ></tag-select>
      </a-card>

      <div class="content-list">
        <div class="content-list__item"
          v-for="(block, blockIndex) in blocks"
          :key="blockIndex"
        >
          <a-card
            class="content-list__item__inner"
            hoverable
          >
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              slot="cover"
            />
            <a-card-meta
              slot="actions"
            >
              <template slot="description">{{ block.label }}</template>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagSelect from '@/components/_tag-select.vue'
export default {
  components: {
    TagSelect,
  },
  data() {
    return {
      // 数据集
      typeOptions:[],

      // 参数
      query: {
        type: ''
      },
      blocks: [],
    }
  },

  async created() {
    this.typeOptions = _.range(1,10).map(i => ({
      value: i,
      label: `类型${i}`,
    }))
  },

  watch: {
    query: {
      handler() {
        this.getBlocks()
      },
      immediate: true,
      deep: true,
    }
  },

  methods: {
    changeTag(types) {
      this.query.type = types
    },

    getBlocks() {
      this.blocks = _.range(1,_.random(8,12)).map(i => ({
        value: i,
        label: `内容${i}`,
      }))
    }
  },
}
</script>

<style lang="less" scoped>
.xy-block {
  .block-banner {
    width: 100%;
    height: 300px;
    background: #6875E9;
  }
  .block-content {
    padding: 40px;
    .content-search {}
    .content-list {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      .content-list__item {
        width: 25%;
        padding: 10px;
        box-sizing: border-box;
        .content-list__item__inner {
        }
      }
    }
  }
} 
</style>