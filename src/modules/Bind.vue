<template>
  <div>
    <ul>
      <li>
        <input type="text" value="" placeholder="请输入卡上的ICCID号或流量卡号">
      </li>
      <li>
        <input type="button" class="btn-pay" value="查询续费">
      </li>
      <li>
        <input type="button" class="btn-scan" value="扫码输入">
      </li>
    </ul>
    <p>温馨提示：系统自动记住您最近查询成功的号码</p>
    <img src="../assets/webwxgeticon.jpeg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Bind'
}
</script>

<style lang="less" scoped>
div{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  ul{
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li{
      width: 100%;
      text-align: center;
      padding:.3rem 0;
      input{
        width: 90%;
        height: 2.3rem;
        border:1px solid #ddd;
        border-radius: 5px;
        padding:.1rem .5rem;
      }
      .btn-pay{
        color:#fff;
        background-color: rgba(0, 153, 255, .8);
        border:none;
      }
      .btn-scan{
        color:rgba(0, 153, 255, .8);
        border-color:rgba(0, 153, 255, .8);
      }
    }
  }
  p{
    width: 90%;
    text-align: left;
    color:#666;
  }
  img{
    margin-top: 1rem;
    width: 100%;
  }
</style>
