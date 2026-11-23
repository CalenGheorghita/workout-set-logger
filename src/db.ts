// Caleb Gheorghita
// CS 461
// Individual Prototype

import * as SQLite from 'expo-sqlite';

// Open the database file/create it the first time it is used
const db = SQLite.openDatabaseSync('workouts3.db')

// Create the table if it doesnt already exist yet
db.execSync(
    `
    CREATE TABLE IF NOT EXISTS sets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    exercise TEXT NOT NULL,
    sets INTEGER NOT NULL,
    reps INTEGER NOT NULL,
    weight REAL NOT NULL,
    date TEXT NOT NULL
    );
    `
);

export type WorkoutSet = {
    id: number;
    exercise: string;
    sets: number;
    reps: number;
    weight: number;
    date: string;
};

// Save one logged workout set
export function addSet(exercise: string, sets: number, reps: number, weight: number) {
  db.runSync(
    'INSERT INTO sets (exercise, sets, reps, weight, date) VALUES (?, ?, ?, ?, ?)',
    exercise, sets, reps, weight, new Date().toISOString()
  );
}

// Get everything, starting with newest first
export function getSets(): WorkoutSet[] {
  return db.getAllSync<WorkoutSet>('SELECT * FROM sets ORDER BY id DESC');
}
