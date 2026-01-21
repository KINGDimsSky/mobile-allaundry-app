import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '@/components/ui/app-text';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-6">
        <AppText variant="bold" className="text-2xl">Profil Saya</AppText>
        
        <View className="mt-10 items-center">
          {/* Avatar Placeholder */}
          <View className="w-24 h-24 bg-slate-100 rounded-full items-center justify-center border border-slate-200">
            <AppText variant="bold" className="text-2xl text-slate-400">K</AppText>
          </View>
          
          <AppText variant="bold" className="mt-4 text-xl">KING Architect</AppText>
          <AppText className="text-slate-500">king@fullstack.it</AppText>
        </View>

        <View className="mt-10">
          <View className="py-4 border-b border-slate-50">
            <AppText variant="medium">Edit Profil</AppText>
          </View>
          <View className="py-4 border-b border-slate-50">
            <AppText variant="medium" className="text-red-500">Keluar Akun</AppText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}