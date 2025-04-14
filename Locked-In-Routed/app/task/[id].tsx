import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import SelectedTask from "../../components/SelectedTask";

export default function Task() {
  const tasks = [
    { key: 1, title: "Workout", timer: "20:00" },
    { key: 2, title: "Eat", timer: "25:00" },
    { key: 3, title: "Shower", timer: "30:00" },
    { key: 4, title: "Meditate", timer: "05:00" },
    { key: 5, title: "Make a list of goals", timer: "10:00" },
    { key: 6, title: "Take a power nap", timer: "49:00" },
    { key: 7, title: "Brainstorm", timer: "13:00" },
    { key: 8, title: "Sleep", timer: "60:00" },
  ];

  const { id } = useLocalSearchParams();
  const index = Number(id) - 1;
  const task = tasks[index];

  return (
    <LinearGradient
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      colors={["#193117", "#1E1E1E"]}
    >
      <SelectedTask />
    </LinearGradient>
  );
}
