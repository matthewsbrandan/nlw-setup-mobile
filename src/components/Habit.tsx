import { View } from "react-native";
import { globalCSS } from "../styles/global";

interface HabitProps{
  opacity: number;
}
export function Habit({ opacity }: HabitProps){
  return (
    <View style={{
      width: 30,
      height: 30,
      backgroundColor: globalCSS.colors.primary,
      opacity,
      borderRadius: 7,
      marginLeft: 8
    }}></View>
  );
}