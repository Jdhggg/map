// 初始化高德地图
var map = new AMap.Map('map', {
    center: [103.6, 30.89],  // 成都东软学院经纬度
    zoom: 15,
    mapStyle: 'amap://styles/dark'  // 使用暗色主题
});

// 定义建筑物
const buildings = [
    { name: "图书馆", position: [103.6, 30.89] },
    { name: "d1男生宿舍", position: [103.599634, 30.889569] },
    { name: "d1男生宿舍", position: [103.599634, 30.889569] },
    { name: "北2门小吃区", position: [103.600806, 30.890135] },
    { name: "e1", position: [103.600463, 30.889379] },
    { name: "d5女生宿舍", position: [103.598299, 30.887151] },
    { name: "d9女生宿舍", position: [103.597913, 30.886679] },
    { name: "d3", position: [103.599787, 30.887689] },
    { name: "e3", position: [103.599463, 30.887308] },
    { name: "成都东软学院体育场", position: [103.599222, 30.886632] },
    { name: "体质测试教室", position: [103.598786, 30.886485] },
    { name: "菜鸟驿站", position: [103.597541, 30.887269] },
    { name: "a8", position: [103.598434, 30.887918] },
    { name: "测试", position: [103.602, 30.892] },
    { name: "测试", position: [103.602, 30.892] },
    { name: "测试", position: [103.603, 30.893] }
];

// 添加标记
buildings.forEach(building => {
    var marker = new AMap.Marker({
        position: building.position,
        map: map,
        title: building.name
    });

    // 点击标记显示评论
    marker.on('click', function () {
        // 更新评论标题
        document.getElementById('comment-title').innerText = '评论 - ' + building.name;
        // 重新初始化 Valine 以更新评论区域
        initValine(building.name);
    });
});

// 初始化 Valine
function initValine(path) {
    new Valine({
        el: '#vcomment',
        appId: 'Ws1wUdZsjYj6ZRIKPJfgxtTX-gzGzoHsz',
        appKey: 'FanUseMEr9H6O9NU4UhutAld',
        placeholder: '留下你的评论...',
        path: path || window.location.pathname
    });
}

// 页面加载完成后初始化 Valine
document.addEventListener('DOMContentLoaded', function () {
    initValine();
});