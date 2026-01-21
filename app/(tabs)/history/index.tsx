import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '@/components/ui/app-text';
import { Link } from 'expo-router';

export default function Historypage() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-6">
        <AppText variant="bold" className="text-2xl">Riwayat Pesanan</AppText>
        <ScrollView className="mt-6">
          <View className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-4">
            <Link href={'/(tabs)/history/[id]'} className="flex-row justify-between items-center">
              <AppText variant="bold">ORD-2026-001</AppText>
              <AppText className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-md">Proses</AppText>
            </Link>
            <AppText  className="text-slate-500 text-xs mt-2">21 Januari 2026 • Cuci Kering</AppText>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}