import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloFromVux'
import searchfor from '@/components/home/demo1/searchfor'
import pailie from '@/components/pailie'
import assess from '@/components/mine/myorder/assess'
import collectCoupons from '@/components/mine/coupons/collectCoupons'
import order from '@/components/mine/myorder/order'
import orderhome from '@/components/mine/orderhome'
import pindetial from '@/components/home/pingtuan/pindetial'
import orderdetial from '@/components/mine/myorder/orderdetial'
import pintuan from '@/components/home/pingtuan/pintuan'
import xsqiangou from '@/components/home/qiangou/xsqiangou'
import personalData from '@/components/mine/personal/personalData'
import pintuangoods from '@/components/home/pingtuan/pintuangoods'
import massage from '@/components/mine/massage/massage'
import systemMassage from '@/components/mine/massage/systemMassage'
import dealMassage from '@/components/mine/massage/dealMassage'
import dingDan from '@/components/cart/dingdan/dingdan'
import adress from '@/components/cart/adress/adress'
import newadress from '@/components/cart/adress/newadress'
import addhui from '@/components/mine/huiyuan/addhui'
import set from '@/components/mine/setting/set'
import view from '@/components/mine/setting/view'
import aboutus from '@/components/mine/setting/aboutus'
import becomemar from '@/components/mine/coupons/becomemar'
import fukuan from '@/components/cart/dingdan/fukuan'
import payfinish from '@/components/cart/dingdan/payfinish'
import goodsneir from '@/components/group/goodsneir'
import pingjia from '@/components/group/pingjia'
import logistics from '@/components/mine/myorder/logistics'
import coupons from '@/components/mine/coupons/coupons'
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
import cashOut from '@/components/mine/personal/cashOut'
import payfor from '@/components/cart/dingdan/payfor'
import myPoints from '@/components/mine/personal/myPoints'
import faq from '@/components/mine/coupons/faq'
import sortSearch from '@/components/sort/sortSearch'
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
      path: '/addressList',
      name: 'addressList',
      component: adress
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
      path: '/goodsneir',
      name: 'goodsneir',
      component: goodsneir
    },
    {path: '/pintuangoodsneir',
      name: 'pintuangoodsneir',
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
      path: '/cashOut',
      name: 'cashOut',
      component: cashOut
    },
    {
      path: '/payfor',
      name: 'payfor',
      component: payfor
    },
    {
      path: '/myPoints',
      name: 'myPoints',
      component: myPoints
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
