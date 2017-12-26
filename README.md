# 下载非脚手架依赖
    npm install --save vue-router vuex swiper
    npm install --save-dev node-sass sass-loader
    
# 简化引入自动模块路径
## 1. 给特定路径添加别名: build/webpack.base.conf.js
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'pages': resolve('src/pages'),
        'components': resolve('src/components'),
        'common': resolve('src/common'),
        'api': resolve('src/api'),
      }
    }

## 2. 使用
    const msite = () => import('pages/msite/msite')
    import headTop from 'components/header/head.vue'
    import {xxx} from 'api'

## 3. 不足: 
    webstorm不能识别路径, 不方便验证路径是否正确
        
# 使用在线SVG图标字体
    1. 确定在线iconfont库: http://iconfont.cn(阿里矢量图标库)
    2. 使用github账号登陆
    3. 创建项目: 硅谷外卖
    4. 根据名称搜索需要图标
    5. 添加到购物车
    6. 添加到项目
    7. 选择一种引用图标的方式: Symbol
    8. 修改图标
    9. 更新在线js代码, 并将脚本链接添加到index.html
        <script src="//at.alicdn.com/t/font_518606_pvbuiyovwqdj9k9.js"></script>
    10. 在<svg>中通过标识名称使用对应的图标
        <svg>
          <use xlink:href="#icon-search2"></use>
        </svg>
        
# 使用css预编译器: sass
## 1. 重要知识
    sass有两种后缀名文件：.sass和.scss
    sass文件: 不使用大括号和分号
    scss文件，使用大括号和分号

## 2. 语法学习: https://www.sass.hk
    结构化编码
    变量: 
        定义变量: $width: 5em;
        引用变量: width: $width;
    混合指令
        @mixin center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        @mixin wh($width, $height) {
          width: $width;
          height: $height;
        }
    引入mixin样式文件
        @import '../../common/style/mixin';
    引入mixin函数
        @include wh(3rem, 3rem);

# ajax封装
## 1. 封装异步fetch函数
    复用fetch函数和XMLHttpRequest对象封装一个通用的fetch函数
    返回一个接收响应数据的promise
    声明函数为async类型

## 2. 使用async/await语法
    1). 理解: 能同步编码的方式实现异步程序运行
    2). 使用async
        返回promise对象的函数
        包含了await的函数
    3). 使用await
        以同步方式调用async函数获取结果的语句

# 开发环境下使用代理解决跨域请求
## 1. 添加代理配置: config/index.js
    proxyTable: {
      '/api': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }

## 2. ajax请求:
    编码请求: /api/v2/xxx
    最终请求: http://cangdu.org:8001/v2/xxx
                    
# vue路由使用深入
## 1. 路由配置元数据
    {
      path: '/msite',
      component: msite,
      meta: {keepAlive: true, isTop: true},
    }

## 2. <router-link>标签
    <router-link class="shop_li"
        :to="{path: 'shop', query:{geohash, id: item.id}}"
        tag='li'>

## 3. route对象
    this.route: 得到route对象
    route.path: 得到当前路由的path
    route.params: 得到包含当前路由路径参数数据的对象
    route.query: 得到包含当前路由路径查询参数数据的对象
    $route.name: 得到路由的名称

## 4. router对象
    this.$router: 得到router对象
    router.currentRoute: 得到当前路由对象
    router.push(location): 添加一个新的路由
    router.replace(location): 用新的路由替换当前路由
    router.back(): 返回到上一个路由
    
## 5. 路由切换过渡动画
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    
    .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-to {
      opacity: 0;
    }
    
# 移动端rem适配
## 1. 定义适配工具模块: src/common/utils/rem.js
    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    
    })(document, window);

## 2. 应用rem适配: src/main.js
    import 'common/utils/rem'
    

# [查看接口文档](API.md)
            

    