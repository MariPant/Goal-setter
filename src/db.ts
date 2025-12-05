import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { Goal } from './types';

const DB_FILE = path.join(__dirname, 'goals.json');

function ensureDbFile() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
  }
}

export function getAllGoals(): Goal[] {
  ensureDbFile();
  const raw = fs.readFileSync(DB_FILE, 'utf-8');
  return JSON.parse(raw) as Goal[];
}

export function saveAllGoals(goals: Goal[]): void {
  fs.writeFileSync(DB_FILE, JSON.stringify(goals, null, 2));
}

export function addGoal(text: string): Goal {
  const goals = getAllGoals();
  const newGoal: Goal = {
    id: crypto.randomUUID(),
    text,
    createdAt: new Date().toISOString(),
  };
  goals.push(newGoal);
  saveAllGoals(goals);
  return newGoal;
}

export function updateGoal(id: string, text: string): Goal | null {
  const goals = getAllGoals();
  const index = goals.findIndex((g) => g.id === id);
  if (index === -1) return null;

  goals[index].text = text;
  saveAllGoals(goals);
  return goals[index];
}

export function deleteGoal(id: string): boolean {
  const goals = getAllGoals();
  const filtered = goals.filter((g) => g.id !== id);
  if (filtered.length === goals.length) return false;
  saveAllGoals(filtered);
  return true;
}