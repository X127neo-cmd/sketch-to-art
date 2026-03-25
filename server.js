// 加载需要的工具包
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

// 创建服务器实例
const app = express();

// 启用跨域和 JSON 解析
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// 让前端页面（public 文件夹）可以被访问
app.use(express.static('public'));

// 定义 API 接口：接收草图，调用 AI 完善
app.post('/api/improve', async (req, res) => {
    try {
        // 1. 接收前端发来的图片数据
        const { imageData } = req.body;
        
        if (!imageData) {
            return res.status(400).json({ error: '没有收到图片数据' });
        }

        // 2. 这里暂时返回一个占位信息（后面再接入真正的 AI）
        console.log('收到草图，大小:', imageData.length);
        
        // 3. 临时返回一张示例图片（后面会换成真正的 AI 结果）
        res.json({
            success: true,
            imageUrl: 'https://picsum.photos/400/400'  // 随机图片占位
        });
        
    } catch (error) {
        console.error('服务器错误:', error);
        res.status(500).json({ error: '服务器内部错误' });
    }
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ 服务器已启动！访问 http://localhost:${PORT}`);
});