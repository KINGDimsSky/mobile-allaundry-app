import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchInput() {
  return (
    <View className="bg-white rounded-2xl flex-row items-center px-4 py-4 shadow-sm border border-slate-100">
      <Feather name="search" size={16} color="#94a3b8" />
      <TextInput placeholder="Cari layanan laundry..."
        placeholderTextColor="#94a3b8"
        className="flex-1 ml-3 font-poppins text-slate-700"/>
    </View>
  );
}