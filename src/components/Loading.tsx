import { ActivityIndicator, View } from "react-native";
import { globalCSS } from "../styles/global";

export function Loading(){
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: globalCSS.colors.bg
    }}>
      <ActivityIndicator color={globalCSS.colors.primary}/>
    </View>
  );
}