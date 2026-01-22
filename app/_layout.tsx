import "../global.css";
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium,
Poppins_600SemiBold, Poppins_700Bold, } from "@expo-google-fonts/poppins";
import { DarkTheme, DefaultTheme, ThemeProvider, } from "@react-navigation/native";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [IsReady, setIsReady] = useState<boolean>(false);
  const segments = useSegments();
  const router = useRouter();
  const colorScheme = useColorScheme();

  /* useEffect(() => {
    // 1. Inisialisasi Sesi Pertama Kali
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsReady(true);
    });

    // 2. Pantau Perubahan Status (Login/Logout)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!IsReady) return;

    const inAuthGroup = segments[0] === 'auth';

    if (!session && !inAuthGroup) {
      // User belum login, tendang ke halaman login
      router.replace('/auth');
    } else if (session && inAuthGroup) {
      // User sudah login tapi mencoba akses login lagi, lempar ke dashboard
      router.replace('/(tabs)');
    }
  }, [session, segments, IsReady]); */

  const [loaded, error] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="auth/index" />
      </Stack>
      <StatusBar style="inverted" />
    </ThemeProvider>
  );
}
