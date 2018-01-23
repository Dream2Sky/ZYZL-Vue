<template>
  <div class="container">
    <header>
      <h1>众云众联</h1>
    </header>
    <div class="cardlist">
      <!-- 模板一 -->
      <!-- <div class="card">
        <div class="card-header card-buy">
          <i class="icon-zyzl icon-goumaiyemiande-xiaogouwuche"></i>
        </div>
      </div> -->
      <div class="card card-buy">
        <div class="card-left">
          <i class="icon-zyzl icon-goumaiyemiande-xiaogouwuche"></i>
        </div>
        <div class="card-right">
          流量卡新购
        </div>
      </div>
            <div class="card card-check">
        <div class="card-left">
          <i class="icon-zyzl icon-chaxun"></i>
        </div>
        <div class="card-right">
          流量查询
        </div>
      </div>
            <div class="card card-pay">
        <div class="card-left">
          <i class="icon-zyzl icon-chongzhi"></i>
        </div>
        <div class="card-right">
          充值
        </div>
      </div>
            <div class="card card-register">
        <div class="card-left">
          <i class="icon-zyzl icon-zhuce"></i>
        </div>
        <div class="card-right">
          注册成为会员
        </div>
      </div>
    </div>
    <footer>
      客服热线&nbsp;&nbsp;&nbsp;&nbsp;<a href="tel:400-0000-0000">400-0000-0000</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="less" scoped>
.container{
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-direction: column;
  align-items:center;
}
header {
  text-align: center;
  height: 13rem;
  width:100%;
  background-color:rgb(0, 153, 255);
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1{
    font-size: 2.4rem;
    color:#fff;
  }
}
.cardlist{
  background-color: #fff;
  width: 80%;
  border-radius: 5px;
  margin-top:-1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .card{
    width: 100%;
    height: 5.5rem;
    border-radius: 5px;
    box-shadow: 0 1px 10px 1px rgba(51,102,204, .3);
    margin-bottom: 1.2rem;
    color:#fff;
    font-size: 1.5rem;
    padding:0 5px;
    // .card-header{
    //   border-top-right-radius: 5px;
    //   border-top-left-radius: 5px;
    //   padding: .1rem .5rem;
    //   .icon-zyzl{
    //     color:#FFFFFF;
    //     font-size: 1.2rem;
    //   }
    // }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    i{
      font-size: 4.7rem;
      color:#FFF
    }
    .card-right{
      flex-grow: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .card-buy{
    background-color: rgba(255, 0, 51, .5);
  }
  .card-check{
    background-color: rgba(51,204,153, 1);
  }
  .card-pay{
    background-color: rgba(51,204,255, 1);
  }
  .card-register{
    background-color: rgba(153,51,255, .6);
  }
}
footer{
  height: 5rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  color: #AAAAAA;
  a{
    color:#00CCFF;
  }
}
</style>
