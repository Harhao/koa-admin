<template>
  <transition name="el_message-fade">
    <div v-if="visible" :class="wrapClasses">
        <Icon :iconType="type"></Icon>
        <span :class="[prefixCls+'-content']">
          {{message}}
        </span>
    </div>        
  </transition>
</template>

<script>
const prefixCls = "el_message";
import Icon from "../el_icon/index.js";
export default {
  name: "el_message",
  data() {
    return {
      visible: false,
      type: "info",
      message: "",
      duration: 1500,
      prefixCls: prefixCls
    };
  },
  components: {
    Icon: Icon
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}`, `${prefixCls}-${this.type}`];
    }
  },
  methods: {
    setTimer() {
      setTimeout(() => {
        this.close(); // 3000ms之后调用关闭方法
      }, this.duration);
    },
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el); // 从DOM里将这个组件移除
      }, 500);
    }
  },
  mounted() {
    this.setTimer(); // 挂载的时候就开始计时，3000ms后消失
  }
};
</script>

<style scoped>
.el_message-fade-enter-active,
.el_message-fade-leave-active {
  transition: all 0.3s ease;
}
.el_message-fade-enter, .el_message-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
.el_message {
  position: fixed;
  top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 15%;
  left: 0;
  right: 0;
  margin: 0 auto 10px auto;
  padding: 16px 8px;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  background: #fff;
  line-height: 1;
  overflow: hidden;
}
.el_message-success {
  background-color: #fff;
  color: #19be6b;
}
.message-info {
  color: #2db7f5;
  background-color: #fff;
}
.el_message-warning {
  color: #f90;
  background-color: #fff;
}
.el_message-error {
  background-color: #fff;
  color: #ed4014;
}
.el_message-content {
  font-size: 14px;
}
</style>
