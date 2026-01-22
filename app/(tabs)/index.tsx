import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProfileCard from "@/components/profile-card";
import { AppText } from "@/components/ui/app-text";
import { Entypo } from "@expo/vector-icons";
import SearchInput from "@/components/SearchInput";
import PromoCarousel from "@/components/PromoCarousel";
import ServiceGrid from "@/components/ServiceGrid";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="pt-8 pb-32">
          <MaxWidthWrapper className="flex-row justify-between items-start">
            <ProfileCard />
            <TouchableOpacity className="p-2">
              <Entypo name="notification" color="black" size={20} />
            </TouchableOpacity>
          </MaxWidthWrapper>

          <Link href="./auth" style={{ marginBottom: 20, color: "blue" }}>
            Ke Halaman Auth (Testing)
          </Link>

          <MaxWidthWrapper className="mt-6">
            <AppText className="text-3xl font-poppins-bold tracking-tighter text-slate-900">
              Selamat Datang!
            </AppText>
          </MaxWidthWrapper>

          <MaxWidthWrapper className="mt-6">
            <SearchInput />
          </MaxWidthWrapper>

          <MaxWidthWrapper>
            <PromoCarousel />
          </MaxWidthWrapper>

          <MaxWidthWrapper className="mt-8">
            <View className="flex-row justify-between items-center mb-2">
              <AppText
                variant="medium"
                className="text-2xl tracking-tight text-slate-900"
              >
                Services
              </AppText>
              <TouchableOpacity>
                <AppText className="text-slate-500 font-poppins-light text-lg">
                  See All
                </AppText>
              </TouchableOpacity>
            </View>
            <ServiceGrid />
          </MaxWidthWrapper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
