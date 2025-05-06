import { SafeAreaView, Dimensions, ImageSourcePropType } from 'react-native'
import { Button, Card, H5, Image, Paragraph, ScrollView, YStack, View } from 'tamagui'

// Sample data
const DATA = [
    {

        title: 'Graphic Design',
        image: require('../../assets/catergories/gd.png')
    },
    {

        title: 'Icon Design',
        image: require('../../assets/catergories/icon.png')
    },
    {

        title: 'UI/UX',
        image: require('../../assets/catergories/ui.png')
    },
    {

        title: 'Typography',
        image: require('../../assets/catergories/typo.png')
    },
    {

        title: 'Logo',
        image: require('../../assets/catergories/logo.png')
    },
    {

        title: '3D Art',
        image: require('../../assets/catergories/3d.png')
    },
];

// Get screen width to calculate card width
const { width } = Dimensions.get('window');
const CARD_GAP = 10;
const CONTAINER_PADDING = 16;
const COLUMN_COUNT = 2;
// Calculate card width based on screen size, gaps, and padding
const CARD_WIDTH = (width - (CONTAINER_PADDING * 2) - (CARD_GAP * (COLUMN_COUNT - 1))) / COLUMN_COUNT;

type ItemProps = { title: string; image: ImageSourcePropType, index: number };

const Item = ({ title, image }: ItemProps) => (
    <Card
        elevate
        size="$4"
        bordered
        width={CARD_WIDTH}
        height={155}
        borderRadius={"$5"}
        overflow='hidden'
        position='relative'
    >
        <Card.Header padded height={"100%"}>

            <Paragraph fontWeight={"bold"} color={'white'}>{title}</Paragraph>

        </Card.Header>
        <Card.Background>
            <Image
                alignSelf="center"
                source={image}
                width={CARD_WIDTH}
                height={155}
            />
            {/* Black overlay between image and text */}
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)', // Semi-transparent black overlay
                }}
            />
        </Card.Background>
    </Card>
);

const Index = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', }}>
            {/* Main content container */}
            <YStack flex={1} justifyContent="flex-start" alignItems="center" padding={CONTAINER_PADDING}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    width={200}
                    height={50}
                    objectFit="contain"
                />
                <H5 fontWeight="bold" textAlign="center" marginTop={20} marginBottom={20}>
                    What creative fields would you like to see work from?
                </H5>
                <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', gap: 10, }}>
                    {DATA.map((item, index) => (
                        <Item image={item.image} key={index} title={item.title} index={index} />
                    ))}
                </ScrollView>
            </YStack>

            {/* Bottom button container */}
            <View style={{ width: '100%', position: 'absolute', bottom: 10, }}>
                <YStack padding={16} backgroundColor="white">
                    <Button
                        theme="black"
                        borderRadius={30}
                        fontWeight="bold"
                        size="$5"
                    // disabled

                    >
                        Continue
                    </Button>
                </YStack>
            </View>
        </SafeAreaView>
    )
}

export default Index