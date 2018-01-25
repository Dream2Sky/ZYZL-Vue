<template>
  <div class="container">
    <header>
      <div class="div-account-balance">
        <div class="div-balance-header">
          <div class="div-sayhello">
            早上好，呵呵ehehheeh
          </div>
        </div>
        <div class="div-balance-content">
          <div>账户余额</div>
          <div>1000 元</div>
          <div class="div-pay">
            <button class="btn-pay">账户充值</button>
          </div>
        </div>
      </div>
      <div class="div-account-flow">
        <div class="div-progress" id="div-progress">
            <!-- <yd-progressbar
                    :progress="progress2"
                    trail-width="2"
                    stroke-width="4"
                    stroke-color="#B2B2B2"
                    trail-color="#FE5D51"
                    fill-color="#EAEAEA">50%</yd-progressbar> -->
        </div>
        <div class="div-pay">
            <button class="btn-pay">添加新卡</button>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="div-content content-left">
        <ul>
          <li>
            <i class="icon-index icon-qian"></i>
            <div class="li-content">
              <div class="li-title">流量充值</div>
              <div class="li-desc">马上充值，享受9.5折</div>
            </div>
          </li>
          <li>
            <i class="icon-index icon-taocan"></i>
            <div class="li-content">
              <div class="li-title">套餐办理</div>
              <div class="li-desc">查看更多优惠套餐</div>
            </div>
          </li>
          <li>
            <i class="icon-index icon-msnui-gift-bold"></i>
            <div class="li-content">
              <div class="li-title">流量赠送</div>
              <div class="li-desc">小伙伴流量不够用啦！</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="div-content content-right">
        <a href="http://www.baidu.com"><img src="../assets/webwxgeticon.jpeg" alt=""></a>
      </div>
    </div>
    <div class="div-ad">
      <div class="div-header"></div>
    </div>
  </div>
</template>

<script>
import '../assets/iconfonts/icon-index.css'
export default {
  name: 'Index',
  methods: {}
}
</script>

<style lang="less" scoped>
header {
  background-color: rgba(0, 153, 255, 0.7);
  height: 9rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 0.7rem;
  .div-account-balance {
    width: 50%;
    height: 9rem;
    .div-balance-header {
      height: 2.25rem;
      text-align: left;
      display: flex;
      align-items: center;
      .div-sayhello {
        background-color: rgba(255, 255, 255, 0.5);
        font-size: 0.5rem;
        padding: 0.2rem;
        padding-right: 0.8rem;
        border-top-right-radius: 1.175rem;
        border-bottom-right-radius: 1.175rem;
      }
    }
    .div-balance-content {
      height: 5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      div {
        height: 1.75rem;
      }
      .div-pay {
        flex-grow: 1;
      }
    }
  }
  .div-account-flow {
    width: 50%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .div-progress {
      width: 6rem;
      height: 6rem;
    }
  }
}
.content{
  display: flex;
  justify-content: center;
  .div-content{
    width: 50%;
    height: 12rem;
  }
  .content-left{
    ul{
      height: 12rem;
      border-bottom:1px solid #BBBBBB;
      border-right:1px solid #bbb;
      li{
        height: 4rem;
        border-bottom:1px solid #BBBBBB;
        display: flex;
        align-items:center;
        padding:.5rem .5rem;
        i{
          width: 3rem;
          font-size: 1.75rem;
          color:#fff;
          border-radius: 1.5rem;
          text-align: center;
          line-height: 3rem;
        }
        .icon-qian{
          background-color: #FFCC66;
        }
        .icon-taocan{
          background-color: #66CCCC;
        }
        .icon-msnui-gift-bold{
          background-color: #3399FF;
        }
        .li-content{
          padding-left:5px;
          .li-title{
            font-size: 15px;
          }
          .li-desc{
            font-size: 9px;
            color:#666666;
          }
        }
      }
    }
  }
  .content-right{
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:1px solid #bbb;
    img{
      width: 10rem;
      height: 10rem;
    }
  }
}
.btn-pay {
  border: none;
  color: #fff;
  background-color: #33ccff;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
}
</style>
