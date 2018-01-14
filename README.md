# webpack 与 React
 > 前言：通过各种类库（诸如vue/react）编写业务逻辑现如今只是前端开发的基本要求，而很多同学却只学了业务开发，虽然现在有很多诸如vue-cli,create-react-app等命令行工具生成项目框架，但每个公司项目各不相同，如果不理解一个项目是如何运转的，一旦碰到问题或者是新的需求就很难去做修改，很少公司会要求你将React的业务代码写得如何如何，因为这执行起来并不难，但工程架构却是每个公司的重中之重，工程架构能力已经成为了前端议价的一个标准，同时项目组织与控制开发到上线流程也是高级前端工程师与初级前端工程师的区别之一。

此次笔记主要分为以下部分：
1. 工程架构
    1. webpack配置
    2. node服务
    3. 服务端渲染基础
2. 项目架构
    1. React
    2. React-Router配置
    3. Mobx配置
    4. 服务端渲染优化
3. 业务开发
    1. 页面开发
    2. 登录服务
    3. 服务端渲染优化

## webpack

### 一些疑问

1. 浏览器不能直接运行jsx，为什么使用了webpack就可以了呢？
2. 为什么能在js文件中require图片或者css这些非js内容呢？
3. 为什么能够在不刷新页面的情况下更新我们刚写好的代码呢？
4. 我们如何操作能让正式上线的代码优化到极致呢？

## React

### React服务端渲染

#### 单页应用的问题

单页应用中所有的html内容都是通过js在浏览器进行生成的，我们在浏览器中输入一个url得到的是一个没有任何内容的html，要等待该html中引用的javascript代码加载完成之后才能渲染出来页面的内容，即我们开发时编写的jsx都是通过js代码生成html插入文档的，这就存在了几个问题：

1. SEO不友好。单页应用加载过程中html是没有任何内容的，SEO无法抓取内容。
2. 首屏时间较长，用户体验差。要等所有的javascript加载完成之后再去渲染页面，比直接加载html所耗费的时间长。

服务端渲染应运而生，依旧是React作为先去，为我们带来了前后端同构的可能

要解决的问题有：

1. 数据同步
2. 路由跳转
3. SEO信息
4. 如何在开发时方便的进行服务端渲染的测试
