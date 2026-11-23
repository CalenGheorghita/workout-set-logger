# Workout Set Logger

A React Native app for logging workout sets. Pick an exercise, enter the sets, reps, and weight, and save it locally. The past sets will show up in a history list.

I built this as my individual prototype for my Oregon State University CS 461 capstone class (a cross-platform personal trainer app), where I compared React Native and Kotlin by building the same feature in both.

## Built With

React Native, Expo, expo-sqlite (TypeScript)

## Getting Started

**Requirements:** [Node.js](https://nodejs.org/) (LTS) and the **Expo Go** app on your phone, or an Android emulator.

``` bash
git clone https://github.com/CalenGheorghita/workout-set-logger.git
cd workout-set-logger
npm install
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iPhone), or press 'a' to open an Android emulator

## Usage

1. Tap an exercise (Bench Press, Squat, Deadlift, Overhead Press).
2. Enter the sets, reps, and weight, then tap **Save Set**
3. The set appears in the history list, like `Squat: 3 x 5 @ 225 lb`. The sets are saved with SQLite, so they stay after you close the app.

## Project Structure
```
src/
│   db.ts
│   
└───app
        index.tsx
        _layout.tsx
```

## Future Ideas

Edit/delete sets, have custom exercises, and grouping history by workout.

## License

MIT. See [LICENSE](LICENSE).