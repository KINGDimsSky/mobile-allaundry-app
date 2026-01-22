import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import { supabase } from '@/lib/supabase'; // Sesuaikan path-nya

export default function AuthTestPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laundry App - KING Test Auth</Text>
      <TextInput
        placeholder="Nama Lengkap"
        onChangeText={(text) => setFullName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title={loading ? 'Proses...' : 'Daftar Baru'} onPress={signUpWithEmail} disabled={loading} />
        <View style={{ marginVertical: 10 }} />
        <Button title={loading ? 'Proses...' : 'Masuk (Login)'} onPress={signInWithEmail} color="#4CAF50" disabled={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 10 },
  buttonContainer: { marginTop: 20 },
});