<template>
  <div class="tag-select">
    <div 
      class="item" 
      v-for="(option, optionIndex) in options" 
      :key="optionIndex"
      @click="selectItem(option)"
    >
      <a-tag
        :color="selectedOptions.indexOf(option) !== -1 ? tagColors.active : tagColors.normal"
      >{{option.label}}</a-tag>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    mode: {
      type: String,
      default: 'single',
    },

    /**
     * 全部可选项数组
     */
    options: {
      type: Array,
      default: () => ([]),
    },

    /**
     * 预置选中的项数组, 和totalList数据来源相同, 至少id是相同的
     */
    preOptions: {
      type: Array,
      default: () => ([]),
    },
  },

  data() {
    return {
      selectedOptions: [],
      tagColors: {
        normal: '',
        active: 'blue',
      }
    }
  },

  created() {
    this.init()
  },

  methods: {
    init() {
      /**
       * 使用props的值初始化当前选中的元素
       * 注意: filter方法返回的新数组的元素和原数组的元素地址相同
       */
      this.selectedOptions = _.intersectionWith(this.options, this.preOptions, (x,y) => {
        return x.value === y.value
      })
    },

    selectItem(item) {
      switch (this.mode) {
        case 'multi':
          if (this.selectedOptions.indexOf(item) === -1) {
            this.selectedOptions.push(item)
          } else {
            this.selectedOptions.splice(this.selectedOptions.indexOf(item), 1)
          }
          break;
      
        case 'single':
          this.selectedOptions = []
          this.selectedOptions.push(item)
          break;

        default:
          break;
      }

      this.confirm()
    },

    confirm() {
      /**
       * tip: 外面接收的时候, 最好是深拷贝该值!!!, 不然容易引起数据流的混乱
       */
      const output = this.mode === 'single' ?
        this.selectedOptions[0] :
        this.selectedOptions
      this.$emit('confirm', output)
    }
  },
}
</script>

<style lang="less" scoped>
.tag-select {
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 10px;
    // border: 1px solid black;
  }
}
</style>



