import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Logo from "../assets/logo.svg";
import colors from 'tailwindcss/colors';

export const Header = () => (
  <View className="w-full flex-row items-center justify-between">
    <Logo/>
    <TouchableOpacity
      activeOpacity={.7}
      className={`
        flex-row h-11 px-4 border border-violet-500 rounded-lg items-center
      `}
    >
      <Feather
        color={colors.violet[500]}
        name="plus"
      />
      <Text className="text-white ml-3 font-semibold text-base">Novo</Text>
    </TouchableOpacity>
  </View>
)