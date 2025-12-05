"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGoals = getAllGoals;
exports.saveAllGoals = saveAllGoals;
exports.addGoal = addGoal;
exports.updateGoal = updateGoal;
exports.deleteGoal = deleteGoal;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const DB_FILE = path_1.default.join(__dirname, 'goals.json');
function ensureDbFile() {
    if (!fs_1.default.existsSync(DB_FILE)) {
        fs_1.default.writeFileSync(DB_FILE, JSON.stringify([]));
    }
}
function getAllGoals() {
    ensureDbFile();
    const raw = fs_1.default.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
}
function saveAllGoals(goals) {
    fs_1.default.writeFileSync(DB_FILE, JSON.stringify(goals, null, 2));
}
function addGoal(text) {
    const goals = getAllGoals();
    const newGoal = {
        id: crypto_1.default.randomUUID(),
        text,
        createdAt: new Date().toISOString(),
    };
    goals.push(newGoal);
    saveAllGoals(goals);
    return newGoal;
}
function updateGoal(id, text) {
    const goals = getAllGoals();
    const index = goals.findIndex((g) => g.id === id);
    if (index === -1)
        return null;
    goals[index].text = text;
    saveAllGoals(goals);
    return goals[index];
}
function deleteGoal(id) {
    const goals = getAllGoals();
    const filtered = goals.filter((g) => g.id !== id);
    if (filtered.length === goals.length)
        return false;
    saveAllGoals(filtered);
    return true;
}
