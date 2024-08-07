import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
  StatusBar,
  Animated,
} from "react-native";
import backgroundChat from "../../assets/background_chat.png";
import stampFront from "../../assets/stamps/stamp_front.png";
import stampBack from "../../assets/stamps/stamp_back.png";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";

const StampScreen = () => {
  const [flip, setFlip] = useState(false);

  const flipAnim = useRef(new Animated.Value(0)).current;

  const flipToValue = flip ? 0 : 180;

  const flipCard = () => {
    Animated.timing(flipAnim, {
      toValue: flipToValue,
      duration: 500,
      useNativeDriver: true,
    }).start(setFlip(!flip));
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 90, 180],
    outputRange: ["0deg", "90deg", "180deg"],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  return (
    <View>
      <View
        style={{
          backgroundColor: "#2C327E",
          height: 300,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          elevation: 10,
        }}
      >
        <ImageBackground
          source={backgroundChat}
          style={{
            height: "100%",
            width: "100%",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
          resizeMode="cover"
        >
          <View
            style={{
              marginLeft: 30,
              marginRight: "auto",
              marginTop: StatusBar.currentHeight + 50 || 50,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 24,
                marginBottom: 20,
              }}
            >
              Charlotte
            </Text>
            <Animated.View
              style={[
                {
                  transform: [{ rotateY: frontInterpolate }],
                },
              ]}
            >
              <Image
                source={flip ? stampBack : stampFront}
                style={
                  flip
                    ? {
                        height: 232,
                        width: 334,
                        backfaceVisibility: "hidden",
                        transform: [{ rotateY: "180deg" }],
                      }
                    : { height: 232, width: 334, backfaceVisibility: "hidden" }
                }
                resizeMode="contain"
              />
            </Animated.View>
            <Pressable
              onPress={flipCard}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  borderRadius: 20,
                  height: 30,
                  elevation: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  size={20}
                  name="chevron-back-outline"
                  color="#2C327E"
                />
                {!flip && (
                  <Text
                    style={{
                      color: "#2C327E",
                      fontSize: 16,
                    }}
                  >
                    virar cartão
                  </Text>
                )}
                <Ionicons
                  size={20}
                  name="chevron-forward-outline"
                  color="#2C327E"
                />
              </View>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default StampScreen;
