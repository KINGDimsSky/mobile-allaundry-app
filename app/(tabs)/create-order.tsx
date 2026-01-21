import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '@/components/ui/app-text';

export default function CreateOrderScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-6">
        <AppText variant="bold" className="text-2xl">Pesanan Baru</AppText>
        <AppText className="text-slate-500 mt-1">Pilih layanan laundry yang Anda butuhkan.</AppText>

        <View className="mt-8 space-y-4">
          {/* Contoh Card Layanan */}
          <View className="p-5 bg-teal-50 rounded-2xl border border-teal-100">
            <AppText variant="bold" className="text-teal-800 text-lg">Cuci Kering</AppText>
            <AppText className="text-teal-600">Mulai dari Rp 5.000/kg</AppText>
          </View>

          <View className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
            <AppText variant="bold" className="text-blue-800 text-lg">Cuci Komplit</AppText>
            <AppText className="text-blue-600">Mulai dari Rp 8.000/kg</AppText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}