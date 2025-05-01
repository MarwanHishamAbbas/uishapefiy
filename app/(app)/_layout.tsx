import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AppRouteAuth() {
    const { isSignedIn } = useAuth()

    if (!isSignedIn) {
        return <Redirect href={'/(auth)'} />
    }

    return <Stack />
}