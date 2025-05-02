import { ClerkProvider, useSession } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

function AppContent() {
  const { isLoaded: sessionLoaded } = useSession();

  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded && sessionLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, sessionLoaded]);

  if (!fontsLoaded || !sessionLoaded) {
    return null;
  }

  return <Slot />;
}

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <AppContent />
    </ClerkProvider>
  );
}
