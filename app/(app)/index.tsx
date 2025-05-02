

import Button from '@/components/ui/button'

import { useAuth } from '@clerk/clerk-react'
import { SafeAreaView, View } from 'react-native'




const Index = () => {

    const { signOut } = useAuth()


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 10 }}>
            <View>
                <Button variant='destructive' onPress={() => signOut()} >Sign out</Button>
            </View>
        </SafeAreaView>
    )
}

export default Index