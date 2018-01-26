<template>
  <div>
      <header>
          <div class="div-header-top">
              <div class="div-header-logo"><img src="../assets/webwxgeticon.jpeg" alt=""></div>
              <div class="div-header-speed">
                  <div class="div-header-speed-up">
                      <i></i>上行速度：422KB/s
                  </div>
                  <div class="div-header-speed-down">
                      <i></i>下行速度：552KB/s
                  </div>
              </div>
          </div>
          <div class="div-header-bottom">
              <div class="div-flowdetail">
                  <span class="flowdetail-value">1024 M</span>
                  <span class="flowdetail-title">总流量(MB)</span>
              </div>
              <div class="div-flowdetail">
                  <span class="flowdetail-value">200 M</span>
                  <span class="flowdetail-title">使用量(MB)</span>
              </div>
              <div class="div-flowdetail">
                  <span class="flowdetail-value">824 M</span>
                  <span class="flowdetail-title">剩余量(MB)</span>
              </div>
          </div>
      </header>
  </div>
</template>

<script>
export default {
  name: 'FLowDetail'
}
</script>

<style lang="less" scoped>
    header{
        background-color: #0099FF;
        color:#fff;
        height: 10rem;
        .div-header-top{
            width: 100%;
            height: 5rem;
            display: flex;
            justify-content: flex-start;
            .div-header-logo{
                width:33.33%;
                text-align: center;
                padding:.5rem 0;
                img{
                    height: 100%;
                }
            }
            .div-header-speed{
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }
</style>
