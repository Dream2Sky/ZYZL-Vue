<template>
  <div>
    <header>
      <div class="header-left">
        <div class="header-phone">157 6815 8635</div>
        <div class="header-balance">余额：50 元</div>
      </div>
      <div class="header-right">
        <i class="icon-nav icon-user"></i>
      </div>
    </header>
    <div class="content">
      <div class="content-title">优惠充值：</div>
      <div class="content-options">
        <ul>
          <li>
            <span class="option-money-up">50 元</span>
            <span class="option-money-down">到账：55元</span>
          </li>
          <li>
            <span class="option-money-up">50 元</span>
            <span class="option-money-down">到账：55元</span>
          </li>
          <li>
            <span class="option-money-up">50 元</span>
            <span class="option-money-down">到账：55元</span>
          </li>
          <li>
            <span class="option-money-up">50 元</span>
            <span class="option-money-down">到账：55元</span>
          </li>
          <li>
            <span class="option-money-up">50 元</span>
            <span class="option-money-down">到账：55元</span>
          </li>
          <li>
            <span class="option-money-up">50 元</span>
            <span class="option-money-down">到账：55元</span>
          </li>
          <li>
            <span class="option-money-up">50 元</span>
            <span class="option-money-down">到账：55元</span>
          </li>
        </ul>
      </div>
      <div class="content-footer">
        <button class="btn-pay">支 付</button>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/iconfonts/icon-nav.css'
export default {
  name: 'Pay'
}
</script>

<style lang="less" scoped>
  header{
    height: 5rem;
    display: flex;
    justify-content: flex-end;
    background-color: #fff;
    margin-top:.6rem;
    .header-left{
      flex-grow:1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items:flex-start;
      padding:1rem;
      .header-phone{
        font-size: 1.5rem;
      }
      .header-balance{
        color:#666;
        font-size:.8rem;
      }
    }
    .header-right{
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      i{
        font-size: 2rem;
        color:#0066CC;
      }
    }
  }
  .content{
    background-color: #fff;
    width: 100%;
    margin-top:1.1rem;
    .content-title{
      width: 100%;
      height: 2.5rem;
      display: flex;
      align-items: center;
      padding-left:1rem;
      font-size: 1rem;
    }
    .content-options{
      width: 100%;
      ul{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        li{
          border:1.4px solid #0099CC;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width:28%;
          padding:1rem;
          margin:.5rem .5rem;
          span{
            color:#0099CC;
          }
          .option-money-up{
            font-size: 1.2rem;
          }
          .option-money-down{
            font-size: .6rem;
          }
        }
      }
    }
    .content-footer{
      width: 100%;
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      button{
        width:70%;
        height: 3rem;
        border:none;
        border:1px solid #00CC66;
        border-radius: 5rem;
        background-color: #00CC66;
        color:#fff;
        font-size:1rem;
      }
    }
  }
</style>
