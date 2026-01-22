import { Image, Text, View } from "react-native";
import { AppText } from "./ui/app-text";

export default function ProfileCard() {
  return (
    <View className="flex flex-col gap-2">
      <View className="w-14 h-14 rounded-full overflow-hidden">
        <Image source={require("@/assets/DimsskyGunung.jpg")} className="w-full h-full"/>
      </View>
      <AppText className="text-lg ml-1  tracking-tight">
        Halo {""} <Text className="font-poppins-semibold">KINGDimsSky</Text> 
      </AppText>
    </View>
  );
}
