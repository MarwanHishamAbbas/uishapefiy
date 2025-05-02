

import { Image, SafeAreaView, View } from 'react-native'


import * as WebBrowser from 'expo-web-browser'
import Text from '@/components/ui/text'


WebBrowser.maybeCompleteAuthSession()

const Index = () => {



    return <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", marginHorizontal: 10 }}>
        <View>
            <Image source={require('../../assets/images/logo.png')} style={{ margin: 'auto' }} />
            <Text variant='h3' align='center'>  What creative fields would you like to see work from?</Text>
        </View>
    </SafeAreaView>
}

export default Index