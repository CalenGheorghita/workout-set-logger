// Caleb Gheorghita
// CS 461
// Individual Prototype - Screen to log a workout set

import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { addSet, getSets, WorkoutSet } from '../db';

const EXERCISES = ['Bench Press', 'Squat', 'Deadlift', 'Overhead Press'];

export default function Index() {
  const [exercise, setExercise] = useState(EXERCISES[0]);
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [history, setHistory] = useState<WorkoutSet[]>([]);

  // Load saved sets when the screen first opens
  useEffect(() => {
    setHistory(getSets());
  }, []);

  function handleSave() {
    // Make sure nothing is empty
    if (!sets || !reps || !weight) {
      Alert.alert('Missing info', 'Fill in sets, reps, and weight.');
      return;
    }

    addSet(exercise, Number(sets), Number(reps), Number(weight));
    setHistory(getSets()); // refresh the list

    // Clear the boxes for the next entry
    setSets('');
    setReps('');
    setWeight('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log a Set</Text>

      <Text>Exercise: {exercise}</Text>
      {EXERCISES.map((name) => (
        <Button key={name} title={name} onPress={() => setExercise(name)} />
      ))}

      <TextInput style={styles.input} placeholder="Sets" keyboardType="numeric" value={sets} onChangeText={setSets} />
      <TextInput style={styles.input} placeholder="Reps" keyboardType="numeric" value={reps} onChangeText={setReps} />
      <TextInput style={styles.input} placeholder="Weight (lb)" keyboardType="numeric" value={weight} onChangeText={setWeight} />

      <Button title="Save Set" onPress={handleSave} />

      <Text style={styles.title}>History</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.exercise}: {item.sets} x {item.reps} @ {item.weight} lb
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  title: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  input: { borderWidth: 1, padding: 8, marginVertical: 4 },
});
