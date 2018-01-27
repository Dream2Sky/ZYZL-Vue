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
            <button class="btn-pay" @click="GotoBiz(0,'Bind')">添加新卡</button>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="div-content content-left">
        <ul>
          <li v-for="(item, index) in items" v-bind:key="item" @click="GotoBiz(index,item.page)" :class="{'li-active':ind===index}">
            <i :class="['icon-index', item.icon]"></i>
            <div class="li-content">
              <div class="li-title">{{item.title}}</div>
              <div class="li-desc">{{item.desc}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="div-content content-right">
        <a href="http://www.baidu.com"><img src="../assets/webwxgeticon.jpeg" alt=""></a>
      </div>
    </div>
    <div class="div-ad">
      <div class="div-ad-header">
        最新活动
      </div>
      <div class="div-ad-content">
        <a href=""><img src="" alt=""></a>
      </div>
    </div>
    <footer>
    </footer>
  </div>
</template>

<script>
import '../assets/iconfonts/icon-index.css'
export default {
  name: 'Index',
  data () {
    return {
      ind: 0,
      items: [
        {
          'title': '流量充值',
          'desc': '马上充值，享受9.5折',
          'icon': 'icon-qian',
          'page': ''
        },
        {
          'title': '套餐办理',
          'desc': '查看更多优惠套餐',
          'icon': 'icon-index-taocan',
          'page': ''
        },
        {
          'title': '流量赠送',
          'desc': '小伙伴流量不够用啦！',
          'icon': 'icon-msnui-gift-bold',
          'page': ''
        }
      ]
    }
  },
  methods: {
    GotoBiz: function (index, page) {
      this.ind = index
      this.$router.push(page)
    }
  }
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
      border-bottom:1px solid #eee;
      border-right:1px solid #eee;
      li{
        height: 4rem;
        border-bottom:1px solid #eee;
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
        .icon-index-taocan{
          background-color: #66CCCC;
        }
        .icon-msnui-gift-bold{
          background-color: #3399FF;
        }
        .li-content{
          padding-left:5px;
          .li-title{
            font-size: .95rem;
          }
          .li-desc{
            font-size: .6rem;
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
    border-bottom:1px solid #eee;
    img{
      width: 10rem;
      height: 10rem;
    }
  }
}
.div-ad{
  width: 100%;
  margin-top:1rem;
  background-color: #fff;
  .div-ad-header{
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    padding-left:1rem;
    border:1px solid #eee;
    font-size: .9rem;
  }
  .div-ad-content{
    height: 6rem;
    background-color: #3399FF;
    border-bottom:1px solid #eee;
  }
}
.li-active{
  background-color: #fff;
}
footer{
  height: 5rem;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 7rem;
  hr{
    width: 100%;
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
