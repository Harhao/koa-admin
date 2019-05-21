<script>
const prefixCls = "el-icon";
export default {
  name: "el-icon",
  data() {
    return {
      prefixCls: prefixCls
    };
  },
  props: {
    iconType: {
      type: String,
      default: "info"
    }
  },
  render: function(h) {
    return h(
      "i",
      {
        attrs: {
          class: `${this.prefixCls}`
        }
      },
      [
        h("img", {
          attrs: {
            src: require(`./assets/${this.iconType}.svg`),
            class: "icon"
          }
        })
      ]
    );
  }
};
</script>

<style scoped lang="scss">
.el-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  color: #fff;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 7px 0 10px;
  & .icon {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>
