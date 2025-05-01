import { Colors } from '@/constants/Colors'
import { useState, type FC } from 'react'
import { Button, Text, View } from 'react-native'
import { ClerkAPIError } from '@clerk/types'
import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'
import { isClerkAPIResponseError, useSSO } from '@clerk/clerk-expo'

WebBrowser.maybeCompleteAuthSession()

const Index = ({ }) => {
    const { startSSOFlow } = useSSO()
    const handleGoogleSignIn = async () => {
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
                setErrors(error.errors)
            } else {
                console.error(error)
            }

        }
    }
    const [errors, setErrors] = useState<ClerkAPIError[]>()
    return <View style={{ backgroundColor: "black", margin: 20, borderRadius: 12, }}>
        <Button title='Sign in with Google' color={'white'} onPress={handleGoogleSignIn} />
        {errors?.map((error) => (
            <Text>{error.message}</Text>
        ))}
    </View>
}

export default Index