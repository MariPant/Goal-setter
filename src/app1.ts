import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT_APP1 || 5001;
const APP2_URL = process.env.APP2_URL || 'http://localhost:5002';

app.use(cors({ origin: '*' }));
app.use(express.json());

// GET /api/goals -> proxy to app2
app.get('/api/goals', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${APP2_URL}/api/goals`);
    res.status(response.status).json(response.data);
  } catch (err: any) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data || { message: 'Error' });
  }
});

// POST /api/goals
app.post('/api/goals', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${APP2_URL}/api/goals`, req.body);
    res.status(response.status).json(response.data);
  } catch (err: any) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data || { message: 'Error' });
  }
});

// PUT /api/goals/:id
app.put('/api/goals/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await axios.put(`${APP2_URL}/api/goals/${id}`, req.body);
    res.status(response.status).json(response.data);
  } catch (err: any) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data || { message: 'Error' });
  }
});

// DELETE /api/goals/:id
app.delete('/api/goals/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await axios.delete(`${APP2_URL}/api/goals/${id}`);
    res.status(response.status).json(response.data);
  } catch (err: any) {
    res
      .status(err.response?.status || 500)
      .json(err.response?.data || { message: 'Error' });
  }
});

app.listen(PORT, () => {
  console.log(`App1 (gateway) listening on port ${PORT}`);
});