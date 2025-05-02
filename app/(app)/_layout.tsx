import { Redirect, Stack } from 'expo-router'
import { SplashScreen } from 'expo-router'

import { useAuth } from '@clerk/clerk-expo'
import Button from '@/components/ui/button';
SplashScreen.preventAutoHideAsync();

export default function AppRouteAuth() {
    const { isSignedIn } = useAuth()



    if (!isSignedIn) {
        return <Redirect href={'/(auth)'} />
    }


    return <Stack >
        <Stack.Screen name='index' options={{ title: '', headerRight: () => <Button variant='ghost'>Sign in</Button>, headerTransparent: true }} />
    </Stack>

}