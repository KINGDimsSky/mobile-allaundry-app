import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image, Pressable } from 'react-native';
import { supabase } from '@/lib/supabase'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '@/components/ui/app-text';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AuthTestPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fungsi Register (Sign Up)
  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName, // Akan ditangkap oleh SQL Trigger
        },
      },
    });

    if (error) Alert.alert('Error Sign Up', error.message);
    else Alert.alert('Sukses!', 'Cek email konfirmasi Anda atau langsung login jika auto-confirm aktif.');
    setLoading(false);
  }

  // Fungsi Login (Sign In)
  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert('Error Sign In', error.message);
    else Alert.alert('Berhasil!', 'Anda sekarang masuk ke sistem laundry.');
    setLoading(false);
  }

  const onpressButton = () => {
    Alert.alert('Tombol ditekan!');
  }

  return (
    <SafeAreaView className='min-h-screen bg-white'>
        <View className='flex flex-col gap-4 mt-14  items-center'>
           <AppText className='text-5xl font-poppins-bold tracking-tighter'>
              AL Laundry
           </AppText>
           <AppText className='text-sm tracking-tight w-full px-12 text-center '>
              Dengan AL Laundry, nikmati kemudahan layanan laundry kapan saja, di mana saja!
           </AppText>
        
        <View className='w-full h-80 mt-8 flex items-center justify-center relative'>
          <Image source={require("@/assets/Category/LaundrySketch.png")} className='w-full h-full' />
        </View>

        <View className='flex flex-row gap-12 w-full px-14  mt-8'> 
          <Pressable onPress={() => router.push('/auth/signin')} className='flex bg-emerald-200 items-center p-4 rounded-lg w-40'>
            <AppText className='text-xl font-poppins-semibold tracking-tight'>
              Login
            </AppText>
          </Pressable>
          <Pressable onPress={() => router.push('/auth/signup')} className='flex bg-emerald-300 items-center p-4 rounded-lg w-40'>
            <AppText className='text-xl font-poppins-semibold tracking-tight'>
              Sign Up
            </AppText>
          </Pressable>
        </View>

        <View className='mt-4'>
            <AppText className='text-base tracking-tight'>
                Or Continue With
            </AppText>
        </View>

        <View className='flex flex-row gap-6 w-full px-24 justify-center'>
            <Pressable onPress={onpressButton} className='flex flex-row justify-center  items-center gap-4 py-3 px-6 w-full bg-slate-200 rounded-full'>
               <AntDesign name="google" size={26} color="black" />
               <AppText className='text-lg tracking-tighter font-poppins-semibold'>
                  Login With Google  
               </AppText>
            </Pressable> 
        </View>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

})

