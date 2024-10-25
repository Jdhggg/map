const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 设置 EJS 为模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 路由
app.get('/', (req, res) => {
    res.render('index', {
        title: '东软通 - 校园地图与评论',
        amapKey: '6f4a47cb8b40ededf1751f651a69b7e3' // 请替换为您的实际高德地图 API 密钥
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});