# 东软通评论网页

东软通是一个基于高德地图和 Valine 评论系统的网页应用，旨在提供成都东软学院周边及校园内建筑和店铺的标记、评论和评分功能。

## 功能

- **地图展示**：显示成都东软学院的建筑物和店铺位置。
- ![](https://i.ibb.co/ncw4WQw/2024-10-25-230507.png)
- **评论系统**：用户可以对建筑物和店铺进行评论和评分。
- ![](https://i.ibb.co/XFd9Tvh/2024-10-25-230529.png)
- **动态内容**：使用 EJS 模板引擎动态加载页面内容。
- ![](https://i.ibb.co/gJ3g91Z/25-10-2024-232016-localhost.jpg)
- 

## 技术栈

- **后端**：Node.js，Express
- **前端**：HTML, CSS, JavaScript
- **地图**：高德地图 API
- **评论系统**：Valine
- **模板引擎**：EJS

## 安装与运行

1.克隆项目到本地：

```bash
git clone git@github.com:Jdhggg/map.git
```

2.进入项目目录：

```bash
cd map
```

3.安装依赖：

```
npm install
```

4.启动服务器：

```
npm start
```

5.打开浏览器，访问 `http://localhost:3000` 查看应用

## 

### 文件结构

```
├── app.js               # Express 服务器的主文件
├── package.json         # 项目依赖和脚本管理文件
├── public/              # 存放静态文件的目录
│   ├── styles.css       # 网站样式定义
│   └── script.js        # 客户端 JavaScript 代码
└── views/               # 存放 EJS 模板文件的目录
└── index.ejs       # 主页面的 EJS 模板
````

## 

## 贡献

欢迎对项目进行贡献！如果你有建议或改进，请提交 issue 或直接创建 pull request。



