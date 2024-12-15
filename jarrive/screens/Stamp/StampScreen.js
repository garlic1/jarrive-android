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

const StampScreen = ({ navigation }) => {
  const [flip, setFlip] = useState(false);
  const [activeTab, setActiveTab] = useState("selos");

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
    inputRange: [0, 90, 180],
    outputRange: ["180deg", "90deg", "0deg"],
  });

  const frontOpacity = flipAnim.interpolate({
    inputRange: [89, 90, 91],
    outputRange: [1, 0, 0],
  });

  const backOpacity = flipAnim.interpolate({
    inputRange: [89, 90, 91],
    outputRange: [0, 1, 1],
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
                  position: "absolute",
                  transform: [{ rotateY: frontInterpolate }],
                  backfaceVisibility: "hidden",
                  opacity: frontOpacity,
                  top: 50,
                },
              ]}
            >
              <Image
                source={stampFront}
                style={{
                  height: 232,
                  width: 334,
                }}
                resizeMode="contain"
              />
            </Animated.View>

            <Animated.View
              style={[
                {
                  position: "absolute",
                  top: 50,
                  transform: [{ rotateY: backInterpolate }],
                  opacity: backOpacity,
                  backfaceVisibility: "hidden",
                },
              ]}
            >
              <Image
                source={stampBack}
                style={{
                  height: 232,
                  width: 334,
                }}
                resizeMode="contain"
              />
            </Animated.View>
            <View style={{ height: 232, width: 334 }} />
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
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 8,
                margin: 20,
              }}
            >
              <Pressable
                style={
                  activeTab === "selos"
                    ? {
                        color: "#FFFFFF",
                        backgroundColor: "#2C327E",
                        borderRadius: 20,
                        elevation: 4,
                        paddingVertical: 5,
                        paddingHorizontal: 60,
                      }
                    : {
                        color: "#D9D9D9",
                        backgroundColor: "#F5F5F5",
                        borderRadius: 20,
                        elevation: 4,
                        paddingVertical: 5,
                        paddingHorizontal: 60,
                      }
                }
                onPress={() => setActiveTab("selos")}
              >
                <Text
                  style={{
                    color: activeTab === "selos" ? "#FFFFFF" : "#D9D9D9",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Selos
                </Text>
              </Pressable>
              <Pressable
                style={
                  activeTab === "mensagem"
                    ? {
                        backgroundColor: "#2C327E",
                        borderRadius: 20,
                        elevation: 4,
                        paddingVertical: 5,
                        paddingHorizontal: 40,
                      }
                    : {
                        backgroundColor: "#F5F5F5",
                        borderRadius: 20,
                        elevation: 4,
                        paddingVertical: 5,
                        paddingHorizontal: 40,
                      }
                }
                onPress={() => setActiveTab("mensagem")}
              >
                <Text
                  style={{
                    color: activeTab === "mensagem" ? "#FFFFFF" : "#D9D9D9",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Mensagem
                </Text>
              </Pressable>
            </View>

            {activeTab === "mensagem" && <MessageTab />}
            {activeTab === "selos" && <StampsTab />}
          </View>
          <Pressable
            style={{
              backgroundColor: "#FFFFFF",
              paddingVertical: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              elevation: 4,
              borderRadius: 20,
              marginHorizontal: 20,
            }}
            onPress={() => navigation.navigate("Chat")}
          >
            <Text
              style={{
                color: "#4354EF",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              VOLTAR PARA O CHAT
            </Text>
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
};

const MessageTab = () => {
  return (
    <View
      style={{
        backgroundColor: "#F5F5F5",
        margin: 20,
        borderRadius: 20,
        padding: 12,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#FFFFFF",
            height: 30,
            width: 30,
            borderRadius: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            elevation: 4,
          }}
        >
          <Ionicons size={20} name="volume-medium" color="#2C327E" />
        </Pressable>
        <View>
          <Text
            style={{
              color: "#2C327E",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Escute a mensagem!
          </Text>
        </View>
      </View>
      <View
        style={{
          margin: 12,
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            textAlign: "left",
            color: "#787878",
            fontSize: 16,
            lineHeight: 25,
          }}
        >
          {`Bonjour!\nJe m’appelle Charlotte, je suis grande: une fille de cinq ans!\n\nJe t’aime.\nBisous`}
        </Text>
      </View>
    </View>
  );
};

const StampsTab = () => {
  return (
    <View>
      <View
        style={{
          marginLeft: 30,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "#4354EF",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Faltam 3 selos para enviar o cartão postal!
        </Text>
      </View>
    </View>
  );
};

export default StampScreen;
