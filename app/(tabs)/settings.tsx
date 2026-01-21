import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '@/components/ui/app-text';

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-6">
        <AppText variant="bold" className="text-2xl">Pengaturan</AppText>

        <View className="mt-8">
          <View className="py-4 border-b border-slate-50 flex-row justify-between">
            <AppText variant="medium">Notifikasi</AppText>
            <AppText className="text-teal-600">Aktif</AppText>
          </View>
          <View className="py-4 border-b border-slate-50 flex-row justify-between">
            <AppText variant="medium">Bahasa</AppText>
            <AppText className="text-slate-400">Indonesia</AppText>
          </View>
          <View className="py-4 border-b border-slate-50">
            <AppText variant="medium">Pusat Bantuan</AppText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}