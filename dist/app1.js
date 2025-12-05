"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const PORT = process.env.PORT_APP1 || 5001;
const APP2_URL = process.env.APP2_URL || 'http://localhost:5002';
app.use((0, cors_1.default)({ origin: '*' }));
app.use(express_1.default.json());
// GET /api/goals -> proxy to app2
app.get('/api/goals', async (req, res) => {
    var _a, _b;
    try {
        const response = await axios_1.default.get(`${APP2_URL}/api/goals`);
        res.status(response.status).json(response.data);
    }
    catch (err) {
        res
            .status(((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) || 500)
            .json(((_b = err.response) === null || _b === void 0 ? void 0 : _b.data) || { message: 'Error' });
    }
});
// POST /api/goals
app.post('/api/goals', async (req, res) => {
    var _a, _b;
    try {
        const response = await axios_1.default.post(`${APP2_URL}/api/goals`, req.body);
        res.status(response.status).json(response.data);
    }
    catch (err) {
        res
            .status(((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) || 500)
            .json(((_b = err.response) === null || _b === void 0 ? void 0 : _b.data) || { message: 'Error' });
    }
});
// PUT /api/goals/:id
app.put('/api/goals/:id', async (req, res) => {
    var _a, _b;
    try {
        const { id } = req.params;
        const response = await axios_1.default.put(`${APP2_URL}/api/goals/${id}`, req.body);
        res.status(response.status).json(response.data);
    }
    catch (err) {
        res
            .status(((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) || 500)
            .json(((_b = err.response) === null || _b === void 0 ? void 0 : _b.data) || { message: 'Error' });
    }
});
// DELETE /api/goals/:id
app.delete('/api/goals/:id', async (req, res) => {
    var _a, _b;
    try {
        const { id } = req.params;
        const response = await axios_1.default.delete(`${APP2_URL}/api/goals/${id}`);
        res.status(response.status).json(response.data);
    }
    catch (err) {
        res
            .status(((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) || 500)
            .json(((_b = err.response) === null || _b === void 0 ? void 0 : _b.data) || { message: 'Error' });
    }
});
app.listen(PORT, () => {
    console.log(`App1 (gateway) listening on port ${PORT}`);
});
