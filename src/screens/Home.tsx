import { Text, View } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";

const weekDays = ['D','S','T','Q','Q','S','S'];

export function Home(){
  return (
    <View className="bg-background flex-1 px-8 pt-16">
      <Header/>
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => (
          <Text
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
            key={`${weekDay}-${index}`}
          >{weekDay}</Text>
        ))}
      </View>
      <View className="flex-row flex-wrap">
        {Array.from({ length: 50 }).map((_, i) => (
          <HabitDay key={i}/>
        ))}
      </View>
    </View>
  );
}