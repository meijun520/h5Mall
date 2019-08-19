import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloFromVux'
import searchfor from '@/components/home/demo1/searchfor'
import pailie from '@/components/pailie'
import assess from '@/components/myorders/myorder/assess'
import collectCoupons from '@/components/myorders/coupons/collectCoupons'
import order from '@/components/myorders/myorder/order'
import orderhome from '@/components/myorders/orderhome'
import pindetial from '@/components/home/pingtuan/pindetial'
import orderdetial from '@/components/myorders/myorder/orderdetial'
import pintuan from '@/components/home/pingtuan/pintuan'
import xsqiangou from '@/components/home/qiangou/xsqiangou'
import personalData from '@/components/myorders/personal/personalData'
import pintuangoods from '@/components/home/pingtuan/pintuangoods'
import massage from '@/components/myorders/massage/massage'
import systemMassage from '@/components/myorders/massage/systemMassage'
import dealMassage from '@/components/myorders/massage/dealMassage'
import dingDan from '@/components/cart/dingdan/dingdan'
import adress from '@/components/cart/adress/adress'
import newadress from '@/components/cart/adress/newadress'
import changeadress from '@/components/cart/adress/changeadress'
import addhui from '@/components/myorders/huiyuan/addhui'
import set from '@/components/myorders/setting/set'
import view from '@/components/myorders/setting/view'
import aboutus from '@/components/myorders/setting/aboutus'
import becomemar from '@/components/myorders/coupons/becomemar'
import fukuan from '@/components/cart/dingdan/fukuan'
import payfinish from '@/components/cart/dingdan/payfinish'
import goodsneir from '@/components/group/goodsneir'
import pingjia from '@/components/group/pingjia'
import logistics from '@/components/myorders/myorder/logistics'
import coupons from '@/components/myorders/coupons/coupons'
import myshop from '@/components/myorders/myshop/myshop'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/searchfor',
      name: 'searchfor',
      component: searchfor
    },
    {
      path: '/pailie',
      name: 'pailie',
      component: pailie
    },
    {
      path: '/assess',
      name: 'assess',
      component: assess
    },
    {
      path: '/collectCoupons',
      name: 'collectCoupons',
      component: collectCoupons
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderhome',
      name: 'orderhome',
      component: orderhome
    },
    {
      path: '/pindetial',
      name: 'pindetial',
      component: pindetial
    },
    {
      path: '/orderdetial',
      name: 'orderdetial',
      component: orderdetial
    },
    {
      path: '/pintuan',
      name: 'pintuan',
      component: pintuan
    },
    {
      path: '/xsqiangou',
      name: 'xsqiangou',
      component: xsqiangou
    },
    {
      path: '/personalData',
      name: 'personalData',
      component: personalData
    },
    {
      path: '/pintuangoods',
      name: 'pintuangoods',
      component: pintuangoods
    },
    {
      path: '/massage',
      name: 'massage',
      component: massage
    },
    {
      path: '/systemMassage',
      name: 'systemMassage',
      component: systemMassage
    },
    {
      path: '/dealMassage',
      name: 'dealMassage',
      component: dealMassage
    },
    {
      path: '/dingDan',
      name: 'dingDan',
      component: dingDan
    },
    {
      path: '/adress',
      name: 'adress',
      component: adress
    },
    {
      path: '/newadress',
      name: 'newadress',
      component: newadress
    },
    {
      path: '/changeadress',
      name: 'changeadress',
      component: changeadress
    },
    {
      path: '/addhui',
      name: 'addhui',
      component: addhui
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/view',
      name: 'view',
      component: view
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/becomemar',
      name: 'becomemar',
      component: becomemar
    },
    {
      path: '/fukuan',
      name: 'fukuan',
      component: fukuan
    },
    {
      path: '/payfinish',
      name: 'payfinish',
      component: payfinish
    },
    {
      path: '/goodsneir',
      name: 'goodsneir',
      component: goodsneir
    },
    {
      path: '/pingjia',
      name: 'pingjia',
      component: pingjia
    },
    {
      path: '/logistics',
      name: 'logistics',
      component: logistics
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: coupons
    },
    {
      path: '/myshop',
      name: 'myshop',
      component: myshop
    }

  ]
})
