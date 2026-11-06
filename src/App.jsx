import Heros from "./components/Heros";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { useState } from "react";
import { generateWorkout } from "./utils/function";

function App() {
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");

  const [workout, setWorkOut] = useState(null);

  function updateWorkOut() {
    if (muscles.length > 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goals });
    console.log(newWorkout);
    setWorkOut(newWorkout);
    window.location.href = "#workout";
  }
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-xs sm:text-base">
      <Heros />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
        updateWorkOut={updateWorkOut}
      />
      {workout && <Workout workout={workout} />}

      {console.log(poison)}
      {console.log(muscles)}
      {console.log(goals)}
      {console.log(workout)}
    </main>
  );
}

export default App;
