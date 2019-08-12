<template>
  <div class="pintuan">
 <tabGroup :title="title" :icon="src"></tabGroup>
    <div class="time">
      <div
        v-for="(item,key) in list"
        :key="key"
        class="qiang"
        @click="hdindex(item)"
        :class="item===shu?'active ':''"
      >
        <span style="font-size:0.93rem">{{item.time}}</span>

        <br />
        <span style="font-size:0.625rem;">{{item.title}}</span>
      </div>
    </div>
    <div style="clear:both"></div>
    <div class="dapai">
      <div class="body">
        <img src style="width:6.5rem; height:6.5rem; border:1px solid red" class="fl" />
        <div>
          <p>妃立宝洗衣包青春版50g</p>
          <p style="color:#999999; font-size:0.75rem;">去污新改革 纳米洗衣宝 孕婴可用</p>
          <x-progress :percent="percent2" :show-cancel="false" ></x-progress>
          {{percent2}}%
          <p class="fx">
            拼团价 ¥{{cost}}
            <span
              style="color:#999999; font-size:0.75rem; text-decoration:line-through"
            >¥22</span>
            <button>马上抢</button>
          </p>
        </div>
        <div class="clear"></div>
      </div>
      <div style="margin-bottom:5rem;"></div>
    </div>
  </div>
</template>
<script>
import { XProgress } from 'vux'
import tabGroup from '@/components/group/tab'
export default {
  data () {
    return {
      cost: 3,
      shu: {},
      percent2: 20,
      title: '限时抢购',
      list: [
        {
          time: '19:00',
          title: '抢购中'
        },
        {
          time: '21:00',
          title: '抢购中'
        },
        {
          time: '23:00',
          title: '抢购中'
        },
        {
          time: '07/12',
          title: '明日预告'
        },
        {
          time: '21:00',
          title: '抢购中'
        }
      ]
    }
  },
  components: {
    XProgress,
    tabGroup: tabGroup },
  methods: {
    getback () {
      history.go(-1)
    },
    hdindex (item) {
      this.shu = item
    }
  }
}
</script>
<style lang="scss">
.pintuan {
  .dapai {
    padding: 0.625rem;
    margin: 0.625rem;
    background-color: #ffffff;
    border-radius: 0.25rem;

    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    .body {
      margin-top: 0.75rem;
      .fx {
        margin: 1rem;
      }
      button {
        color: #ffffff;
        float: right;
        width: 4.5rem;
        height: 1.875rem;
        background-image: linear-gradient(to right, #ff214c, #ff4f71);
        border-radius: 1.125rem;
        border: none;
        box-shadow: 0px 0.125rem 0.25rem 0px rgba(255, 175, 189, 1);
      }
    }
    .clear {
      clear: both;
      border: 0.0625rem solid #f4f4f4;
    }

     .weui-progress{
       height: 2rem;
       width: 6.8rem;
       float: left;
       .weui-progress__bar {
        height: 0.68rem;
        .weui-progress__inner-bar {
          background-color: #ff214c;
        }
      }

     }
    
  }
  .time {
    background-color: #ffffff;
    height: 3rem;
    border-bottom: 0.0625rem solid #e5e5e5;
    .qiang {
      float: left;
      width:calc(100%/5);
      height: 3rem;
      text-align: center;
    }
    .active {
      color: #ffffff;
      background-color: #ff4569;
    }
  }
}
</style>