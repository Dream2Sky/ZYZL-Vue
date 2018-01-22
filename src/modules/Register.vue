<template>
  <div class="container">
    <header>
      <img src="./../assets/zyzl_logo.jpg">
    </header>
    <ul>
      <li class="li-phone">
        <input name="txt-phone" type="number" placeholder="请输入手机号">
      </li>
      <li class="li-code">
        <input name="txt-code" type="number" placeholder="请输入验证码">
        <button name="btn-code" type="button" v-on:click="getCode" v-bind:class="{'disabledBtn':isGetCode}" :disabled="isGetCode">{{!isGetCode?'点击获取验证码':count +' s后可重新获取'}}</button>
      </li>
      <li>
        <input type="button" name="submit" value="注册" @click="register">
      </li>
    </ul>
    <footer>
      <hr>
      <p>Copyright © 2018 众云众联 </p>
    </footer>
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

<style lang="less">
.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
header {
  text-align: center;
  img {
    width: 35%;
    margin-top: 50px;
  }
}

ul {
  width: 100%;
  margin-top: 20px;
  li {
    width: 100%;
    padding: 5px;
    display: flex;
    input {
      width: 100%;
      height: 40px;
      padding-left: 7px;
      padding-right: 7px;
      font-size: 14px;
      border-color: #fff;
      border-radius: 5px;
      border-color: rgba(0, 0, 0, 0.2);
      border-width: 1px;
      border-style: solid;
      -webkit-appearance: none;
      // box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px;
      // -moz-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px;
      // -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px;
    }
    input[name="txt-phone"] {
      width: 100%;
    }
    input[name="submit"] {
      background-color: #0099ff;
      color: #fff;
      border: none;
    }
    input[name="submit"]:active {
      background-color: #0066ff;
    }
    button[name="btn-code"] {
      background-color: #0066ff;
      color: #fff;
      border: none;
      width: 100%;
      height: 40px;
      padding-left: 7px;
      padding-right: 7px;
      font-size: 14px;
      border-radius: 5px;
    }
    button[name="btn-code"]:active {
      background-color: gray;
    }
  }
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
