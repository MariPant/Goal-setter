import express, { Request, Response } from 'express';
import cors from 'cors';
import { getAllGoals, addGoal, updateGoal, deleteGoal } from './db';

const app = express();
const PORT = process.env.PORT_APP2 || 5002;

// Разрешаем запросы только от 1-го сервиса (gateway)
const APP1_ORIGIN = process.env.APP1_ORIGIN || 'http://localhost:5001';

app.use(cors({
  origin: APP1_ORIGIN,
}));

app.use(express.json());

// GET /api/goals
app.get('/api/goals', (req: Request, res: Response) => {
  const goals = getAllGoals();
  res.json(goals);
});

// POST /api/goals
app.post('/api/goals', (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: 'text is required' });
  }
  const goal = addGoal(text);
  res.status(201).json(goal);
});

// PUT /api/goals/:id
app.put('/api/goals/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'text is required' });
  }

  const updated = updateGoal(id, text);
  if (!updated) {
    return res.status(404).json({ message: 'Goal not found' });
  }

  res.json(updated);
});

// DELETE /api/goals/:id
app.delete('/api/goals/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const ok = deleteGoal(id);
  if (!ok) {
    return res.status(404).json({ message: 'Goal not found' });
  }
  res.status(200).json({ id });
});

app.listen(PORT, () => {
  console.log(`App2 (core API) listening on port ${PORT}`);
});
