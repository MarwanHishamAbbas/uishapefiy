
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";

export default function Index() {

  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <Pressable >
        <View
          style={{
            width: "100%",
            height: 44,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <Image
            source={require("../assets/images/google-icon.png")}
            style={{
              width: 18,
              height: 18,
              marginRight: 6,
            }}
          />
          <Text>
            Continue with Google
          </Text>
        </View>
      </Pressable>

    </View>
  );
}
