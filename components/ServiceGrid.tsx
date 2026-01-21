import { View, TouchableOpacity, Image } from "react-native";
import { AppText } from "./ui/app-text";

const SERVICES = [
  { id: 1, name: "Cuci & Setrika", image: require("@/assets/Category/CuciSetrika.png"), color: "#3b82f6" },
  { id: 2, name: "Setrika", image: require("@/assets/Category/Setrika.png"), color: "#f59e0b" },
  { id: 3, name: "Cuci Mamel", image: require("@/assets/Category/Cucimamel.png"), color: "#ef4444" },
  { id: 4, name: "Laundry Express", image: require("@/assets/Category/Express.png"), color: "#8b5cf6" },
];

export default function ServiceGrid() {
  return (
    <View className="flex-row flex-wrap justify-between mt-6">
      {SERVICES.map((service) => (
        <TouchableOpacity key={service.id} 
          className="bg-white w-[48%] mb-4 p-4 rounded-2xl items-center justify-center shadow-md shadow-slate-200"
          activeOpacity={0.7}>
          <View className=" w-48 h-48 rounded-full mb-4">
            <Image source={service.image} className="w-full h-full" resizeMode="contain"/>
          </View>
          <AppText variant="medium" className="text-center tracking-tight text-lg text-slate-800">
            {service.name}
          </AppText>
        </TouchableOpacity>
      ))}
    </View>
  );
}