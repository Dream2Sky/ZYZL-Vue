<template>
  <div>
      <header>
          <div class="div-header-top">
              <div class="div-header-logo"><img src="../assets/webwxgeticon.jpeg" alt=""></div>
              <div class="div-header-speed">
                  <div class="div-header-speed-up">
                      <i class="icon-flow icon-iconset0414"></i>上行速度：422KB/s
                  </div>
                  <div class="div-header-speed-down">
                      <i class="icon-flow icon-iconset0413"></i>下行速度：552KB/s
                  </div>
              </div>
          </div>
          <div class="div-header-bottom">
              <div class="div-flowdetail">
                  <span class="flowdetail-value div-flowdetail-hasborder">1024 M</span>
                  <span class="flowdetail-title div-flowdetail-hasborder">总流量(MB)</span>
              </div>
              <div class="div-flowdetail">
                  <span class="flowdetail-value div-flowdetail-hasborder">200 M</span>
                  <span class="flowdetail-title div-flowdetail-hasborder">使用量(MB)</span>
              </div>
              <div class="div-flowdetail">
                  <span class="flowdetail-value">824 M</span>
                  <span class="flowdetail-title">剩余量(MB)</span>
              </div>
          </div>
      </header>
      <div class="div-flowcard-card">
          <div class="div-card-header">流量卡状态</div>
          <div class="div-card-content"></div>
      </div>
      <div class="div-flowcard-card">
          <div class="div-card-header">更多流量卡服务</div>
          <div class="div-card-content">
              <ul>
                  <li>
                      <i class="icon-flow icon-flow-taocan"></i>
                      <p>流量卡套餐</p>
                      <i class="icon-arrow icon-jiantouarrow487"></i>
                  </li>
                  <li>
                      <i class="icon-flow icon-liuliangquan"></i>
                      <p>流量加餐包</p>
                      <i class="icon-arrow icon-jiantouarrow487"></i>
                  </li>
              </ul>
          </div>
      </div>
      <footer>
          温馨提示:
      </footer>
  </div>
</template>

<script>
import '../assets/iconfonts/icon-flow.css'
import '../assets/iconfonts/icon-arrow.css'
export default {
  name: 'FLowDetail'
}
</script>

<style lang="less" scoped>
    header{
        background-color: #0099FF;
        color:#fff;
        height: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .div-header-top{
            width: 100%;
            height: 6rem;
            display: flex;
            justify-content: flex-start;
            .div-header-logo{
                width:33.33%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding:1rem 0;
                img{
                   width: 60%;
                }
            }
            .div-header-speed{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding:1rem 0;
                width:66.77%;
                div{
                    width: 100%;
                }
                i{
                    height: 1rem;
                    width: 1rem;
                    color:#fff;
                    padding:1rem;
                }
            }
        }
        .div-header-bottom{
            width: 100%;
            display: flex;
            justify-content: space-around;
            .div-flowdetail{
                width:33.33%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .flowdetail-value{
                    font-size: 1rem;
                }
                span{
                    width:100%;
                    text-align: center;
                }
            }
            .div-flowdetail-hasborder{
                border-right : 1px solid #fff;
            }
        }
    }
    .div-flowcard-card{
        width: 100%;
        height: 7rem;
        margin-top:.5rem;
        background-color: #fff;
        color:#333333;
        .div-card-header{
            border-left:.4rem solid #00CCFF;
            height: 2rem;
            padding-left:.5rem;
            font-size: 1rem;
            display: flex;
            align-items: center;
        }
        .div-card-content{
            border-top:1px solid rgba(238, 238, 238, .4);
            height: 5rem;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                li{
                    font-size: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding:0 1rem;
                    height: 2.5rem;
                    .icon-flow-taocan,
                    .icon-liuliangquan{
                        font-size: 2rem;
                    }
                    p{
                        flex-grow: 1;
                        padding-left:1rem;
                    }
                    .icon-flow-taocan{
                        color:#FF9933;
                    }
                    .icon-liuliangquan{
                        color:#66CC99;
                    }
                }
            }
        }
    }
    footer{
        margin-top:.5rem;
        background-color: #fff;
        height: 10rem;
        color:#666;
        padding:1rem;
    }
</style>
