import { Stack } from "expo-router";

export default function HistoryLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Riwayat Pesanan" }} />
      <Stack.Screen name="[id]" options={{ title: "Detail Pesanan" }} />
    </Stack>
  );
}
