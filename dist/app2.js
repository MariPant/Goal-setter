"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const app = (0, express_1.default)();
const PORT = process.env.PORT_APP2 || 5002;
// Разрешаем запросы только от 1-го сервиса (gateway)
const APP1_ORIGIN = process.env.APP1_ORIGIN || 'http://localhost:5001';
app.use((0, cors_1.default)({
    origin: APP1_ORIGIN,
}));
app.use(express_1.default.json());
// GET /api/goals
app.get('/api/goals', (req, res) => {
    const goals = (0, db_1.getAllGoals)();
    res.json(goals);
});
// POST /api/goals
app.post('/api/goals', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ message: 'text is required' });
    }
    const goal = (0, db_1.addGoal)(text);
    res.status(201).json(goal);
});
// PUT /api/goals/:id
app.put('/api/goals/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ message: 'text is required' });
    }
    const updated = (0, db_1.updateGoal)(id, text);
    if (!updated) {
        return res.status(404).json({ message: 'Goal not found' });
    }
    res.json(updated);
});
// DELETE /api/goals/:id
app.delete('/api/goals/:id', (req, res) => {
    const { id } = req.params;
    const ok = (0, db_1.deleteGoal)(id);
    if (!ok) {
        return res.status(404).json({ message: 'Goal not found' });
    }
    res.status(200).json({ id });
});
app.listen(PORT, () => {
    console.log(`App2 (core API) listening on port ${PORT}`);
});
