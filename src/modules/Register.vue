<template>
  <div class="container">
    <ul>
      <li class="li-phone">
        <i class="icon-register icon-yonghu"></i>
        <input name="txt-phone" type="number" placeholder="请输入手机号">
      </li>
      <li class="li-code">
        <i class="icon-register icon-yanzhengma"></i>
        <input name="txt-code" type="number" placeholder="请输入验证码">
        <button name="btn-code" type="button" v-on:click="getCode" v-bind:class="{'disabledBtn':isGetCode}" :disabled="isGetCode">{{!isGetCode?'获取验证码':'('+count +') s'}}</button>
      </li>
    </ul>
    <input type="button" name="submit" value="注册" @click="register">
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
    return {
      TIME_COUNT: 10,
      isGetCode: false,
      count: 60,
      timer: null
    }
  },
  methods: {
    getCode: function () {
      if (!this.timer) {
        this.count = this.TIME_COUNT
        this.isGetCode = true
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= this.TIME_COUNT) {
            this.count--
          } else {
            this.isGetCode = false
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    register: function () {
      this.$router.push({ name: 'Cards' })
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  text-align: center;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
ul {
  width: 100%;
  margin-top: 20px;
  background-color: #fff;
  border: none;
  li {
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: cneter;
    align-items: center;
    border: 1px solid #bbb;
    border-left: none;
    border-right: none;
    i {
      width: 3rem;
      font-size: 1.6rem;
      text-align: center;
      color: #999999;
    }
    input {
      height: 3rem;
      font-size: 1.1rem;
      color:#999999;
      border: none;
      -webkit-appearance: none;
      // box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px;
      // -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px;
      // -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px;
    }
    button[name='btn-code'] {
      background-color: #3399ff;
      color: #fff;
      border: none;
      height: 2.5rem;
      width:6rem;
      font-size: 0.9rem;
    }
    button[name='btn-code']:active {
      background-color: gray;
    }
  }
  .li-code {
    border-top: none;
  }
}
input[name='submit'] {
  background-color: #FF9933;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 80%;
  height: 3rem;
  font-size: 1.1rem;
}
input[name='submit']:active {
  background-color: #FF9933;
}
footer {
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 11px;
  margin-top: 100px;
  hr {
    margin-top: 5px;
    margin-bottom: 5px;
    border-color: rgba(0, 0, 0, 0.1);
  }
}
.disabledBtn {
  background-color: gray !important;
}
</style>
