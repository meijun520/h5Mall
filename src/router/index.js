import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloFromVux'
import searchfor from '@/components/home/demo1/searchfor'
import assess from '@/components/mine/myorder/assess'
import coupon from '@/components/mine/coupons/coupon'
import myOrder from '@/components/mine/myorder/myOrder'
import orderhome from '@/components/mine/orderhome'
import pindetial from '@/components/home/pingtuan/pindetial'
import orderdetial from '@/components/mine/myorder/orderdetial'
import groupon from '@/components/home/pingtuan/groupon'
import seckill from '@/components/home/qiangou/seckill'
import personalData from '@/components/mine/personal/personalData'
import pintuangoods from '@/components/home/pingtuan/pintuangoods'
import massage from '@/components/mine/massage/massage'
import systemMassage from '@/components/mine/massage/systemMassage'
import dealMassage from '@/components/mine/massage/dealMassage'
import dingDan from '@/components/cart/dingdan/dingdan'
import myAdress from '@/components/mine/adress/myAdress'
import newadress from '@/components/mine/adress/newadress'
import addhui from '@/components/mine/huiyuan/addhui'
import set from '@/components/mine/setting/set'
import view from '@/components/mine/setting/view'
import aboutus from '@/components/mine/setting/aboutus'
import becomemar from '@/components/mine/coupons/becomemar'
import fukuan from '@/components/cart/dingdan/fukuan'
import payfinish from '@/components/cart/dingdan/payfinish'
import productDetail from '@/components/group/productDetail'
import pingjia from '@/components/group/pingjia'
import logistics from '@/components/mine/myorder/logistics'
import coupongroup from '@/components/mine/coupons/coupongroup'
import myshop from '@/components/mine/myshop/myshop'
import weiixnlogin from '@/components/mine/login/weixinlogin'
import setphone from '@/components/mine/login/setphone'
import bindsuccess from '@/components/mine/login/bindsuccess'
import acLogin from '@/components/mine/login/acLogin'
import login from '@/components/mine/login/login'
import register from '@/components/mine/login/register'
import changepassword from '@/components/mine/login/changepassword'
import setpassword from '@/components/mine/login/setpassword'
import setsuccess from '@/components/mine/login/setsuccess'
import myCoupons from '@/components/mine/coupons/myCoupons'
import myCollect from '@/components/mine/personal/myCollect'
import myAccounts from '@/components/mine/personal/myAccounts'
import recharge from '@/components/mine/personal/recharge'
import withdraw from '@/components/mine/personal/withdraw'
import payfor from '@/components/cart/dingdan/payfor'
import myScore from '@/components/mine/personal/myScore'
import faq from '@/components/mine/coupons/faq'
import sortSearch from '@/components/search/sortSearch'
import selection from '@/components/mine/myshop/selection'

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
      path: '/assess',
      name: 'assess',
      component: assess
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
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
      path: '/groupon',
      name: 'groupon',
      component: groupon
    },
    {
      path: '/seckill',
      name: 'seckill',
      component: seckill
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
      path: '/addressList',
      name: 'addressList',
      component: myAdress
    },
    {
      path: '/newAddress',
      name: 'newAddress',
      component: newadress
    },
    {
      path: '/editAddress',
      name: 'editAddress',
      component: newadress
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
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {path: '/pintuangoodsneir',
      name: 'pintuangoodsneir',
      component: productDetail

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
      path: '/coupongroup',
      name: 'coupongroup',
      component: coupongroup
    },
    {
      path: '/myshop',
      name: 'myshop',
      component: myshop
    },
    {
      path: '/setphone',
      name: 'setphone',
      component: setphone
    },
    {
      path: '/weixinlogin',
      name: 'weixnlogin',
      component: weiixnlogin
    },
    {
      path: '/bindsuccess',
      name: 'bindsuccess',
      component: bindsuccess
    },
    {
      path: '/acLogin',
      name: 'acLogin',
      component: acLogin
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: changepassword
    },
    {
      path: '/setpassword',
      name: 'setpassword',
      component: setpassword
    },
    {
      path: '/setsuccess',
      name: 'setsuccess',
      component: setsuccess
    },
    {
      path: '/myCoupons',
      name: 'myCoupons',
      component: myCoupons
    },
    {
      path: '/myCollect',
      name: 'myCollect',
      component: myCollect
    },
    {
      path: '/myAccounts',
      name: 'myAccounts',
      component: myAccounts
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: withdraw
    },
    {
      path: '/payfor',
      name: 'payfor',
      component: payfor
    },
    {
      path: '/myScore',
      name: 'myScore',
      component: myScore
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    {
      path: '/sortSearch',
      name: 'sortSearch',
      component: sortSearch
    },
    {
      path: '/selection',
      name: 'selection',
      component: selection
    }

  ]
})
