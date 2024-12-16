const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const https = require('https');

const app = express();
const port = 3000;

// 配置忽略SSL验证的fetch选项
const agent = new https.Agent({
    rejectUnauthorized: false
});

// 配置中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// 登录API
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const response = await fetch('https://your-api-endpoint/login', {
            method: 'POST',
            agent,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 注册API
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        const response = await fetch('https://your-api-endpoint/register', {
            method: 'POST',
            agent,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 发送验证码API
app.post('/api/send-verification', async (req, res) => {
    try {
        const { email } = req.body;
        
        const response = await fetch('https://your-api-endpoint/send-verification', {
            method: 'POST',
            agent,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 验证码验证API
app.post('/api/verify-code', async (req, res) => {
    try {
        const { email, code } = req.body;
        
        const response = await fetch('https://your-api-endpoint/verify-code', {
            method: 'POST',
            agent,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, code })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 重置密码API
app.post('/api/reset-password', async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        
        const response = await fetch('https://your-api-endpoint/reset-password', {
            method: 'POST',
            agent,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, newPassword })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 