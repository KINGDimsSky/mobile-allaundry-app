import { View, ScrollView, Image } from "react-native";
import { AppText } from "./ui/app-text";

const PROMO_DATA = [
  { id: 1, title: "Grab the Deal", discount: "60% Discount", bg: "bg-teal-100", image: require("@/assets/Category/CuciSetrika.png") },
  { id: 2, title: "Special Sunday", discount: "Free Ironing", bg: "bg-pink-100", image: require("@/assets/Category/Express.png")},
];

export default function PromoCarousel() {
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}
      className="mt-6">
      {PROMO_DATA.map((item) => (
        <View key={item.id} className={`w-[320px] ${item.bg} rounded-3xl p-6 mr-4 flex-row items-center overflow-hidden`}>
          <View className="flex-1">
            <View className="bg-black/80 self-start px-3 py-1 rounded-full">
              <AppText className="text-white text-[10px] font-poppins-bold">{item.title}</AppText>
            </View>
            <AppText className="text-xl font-poppins-bold mt-2 leading-tight">
              Get <AppText className="text-orange-500">{item.discount}</AppText>{"\n"}in Premium Laundry
            </AppText>
            <AppText className="text-[10px] text-slate-500 mt-2 font-poppins">Terms and Conditions Apply</AppText>
          </View>
          <View className="w-24 h-24 bg-white/50 rounded-full"> 
            <Image source={item.image} className="w-full h-full" resizeMode="contain"/>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}