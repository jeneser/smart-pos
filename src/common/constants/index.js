/**
 * 导航
 */
const navConfig = [
  {
    path: '/checkout',
    name: '结算收款',
    iconName: 'icon_shopping_cart_gray'
  },
  {
    path: '/home/cart',
    name: '当前账单',
    iconName: 'icon_list_gray'
  },
  {
    path: '/home/orders',
    name: '历史账单',
    iconName: 'icon_analysis_gray'
  },
  {
    path: '/configure',
    name: '用户设置',
    iconName: 'icon_setting_gray'
  }
];

/**
 * 支付方式
 */
const payMethods = [
  {
    icon: 'icon_alipay_gray',
    text: '支付宝',
    id: 'alipay'
  },
  {
    icon: 'icon_cash_gray',
    text: '现金支付',
    id: 'cash'
  }
];

export { navConfig, payMethods };
