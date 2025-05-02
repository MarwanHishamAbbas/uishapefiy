import { Redirect, Stack } from 'expo-router'
import { isClerkAPIResponseError, useAuth, useSSO } from '@clerk/clerk-expo'
import Button from '@/components/ui/button'
import * as AuthSession from 'expo-auth-session'
import { useState } from 'react'

export default function AuthRoutesLayout() {
    const { isSignedIn } = useAuth()
    const { startSSOFlow } = useSSO()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    if (isSignedIn) {
        return <Redirect href={'/(app)'} />
    }


    const handleGoogleSignIn = async () => {
        setIsLoading(true)
        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy: 'oauth_google', redirectUrl: AuthSession.makeRedirectUri() })

            if (createdSessionId) {
                setActive!({ session: createdSessionId })
            } else {
                // There's no session
                console.log('No Session')
            }
        } catch (error) {
            if (isClerkAPIResponseError(error)) {
                console.log(error.errors)
            } else {
                console.error(error)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return <Stack >
        <Stack.Screen name='index' options={{ title: '', headerRight: () => <Button onPress={handleGoogleSignIn} variant='ghost' loading={isLoading}>Sign in</Button>, headerTransparent: true }} />
    </Stack>

}