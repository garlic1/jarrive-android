import {
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
  StatusBar,
  Animated,
  ScrollView,
} from "react-native";
import backgroundChat from "../../assets/background_chat.png";
import cartePostaleFront from "../../assets/carte_postale/carte_postale_front.png";
import cartePostaleBack from "../../assets/carte_postale/carte_postale_back.png";
import stampDisabled from "../../assets/stamp_disabled.png";
import stampNormal from "../../assets/stamp.png";
import stampAchieved from "../../assets/stamp_achieved.png";
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
                source={cartePostaleFront}
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
                source={cartePostaleBack}
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
                <Text
                  style={{
                    color: "#2C327E",
                    fontSize: 16,
                  }}
                >
                  virar cartão
                </Text>
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
                style={{
                  color: activeTab === "selos" ? "#FFFFFF" : "#D9D9D9",
                  backgroundColor:
                    activeTab === "selos" ? "#2C327E" : "#F5F5F5",
                  borderRadius: 20,
                  elevation: 4,
                  paddingVertical: 5,
                  paddingHorizontal: 60,
                }}
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
                style={{
                  color: activeTab === "mensagem" ? "#FFFFFF" : "#D9D9D9",
                  backgroundColor:
                    activeTab === "mensagem" ? "#2C327E" : "#F5F5F5",
                  borderRadius: 20,
                  elevation: 4,
                  paddingVertical: 5,
                  paddingHorizontal: 60,
                }}
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
          </View>
        </ImageBackground>
      </View>
      <View style={{ marginTop: 150 }}>
        {activeTab === "mensagem" && <MessageTab />}
        {activeTab === "selos" && <StampsTab />}
      </View>
      <Pressable
        style={{
          backgroundColor: "#F5F5F5",
          paddingVertical: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          elevation: 4,
          borderRadius: 20,
          marginTop: 20,
          marginHorizontal: 25
        }}
        onPress={() => navigation.navigate("Chat")}
        disabled
      >
        <Text
          style={{
            color: "#D9D9D9",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          VOLTAR PARA O CHAT
        </Text>
      </Pressable>
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
  const stamps = [
    {
      type: "verbes reguliers",
      number: "#001",
      title: "Être",
      variant: "available",
    },
    {
      type: "verbes reguliers",
      number: "#002",
      title: "Appeler",
      variant: "disabled",
    },
    {
      type: "substantivos",
      number: "#001",
      title: "Pessoas",
      variant: "disabled",
    },
    { type: "números", number: "#001", title: "1 a 10", variant: "disabled" },
  ];

  return (
    <View style={{ margin: 30, width: 350 }}>
      <Text
        style={{
          marginBottom: 27,
          color: "#4354EF",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Faltam 3 selos para enviar o cartão postal!
      </Text>
      <View>
        <ScrollView horizontal>
          {stamps.map(({ type, number, title, variant }, index) => (
            <Stamp
              key={index}
              type={type}
              number={number}
              title={title}
              variant={variant}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const Stamp = ({ type, number, title, variant }) => {
  const VARIANTS = {
    disabled: stampDisabled,
    achieved: stampAchieved,
    available: stampNormal,
  };

  const textStyle = {
    disabled: { fontSize: 20, color: "#D9D9D9" },
    achieved: { fontSize: 20, color: "#FFFFFF" },
    available: { fontSize: 20, color: "#4354EF" },
  };

  const background = VARIANTS[variant];

  return (
    <View style={{ marginRight: 20 }}>
      <ImageBackground
        source={background}
        style={{
          width: 198,
          height: 160,
        }}
      >
        <View
          style={{
            margin: 25,
          }}
        >
          <Text style={textStyle[variant]}>{type}</Text>
          <Text style={textStyle[variant]}>{number + "\n"}</Text>
          <Text style={{ ...textStyle[variant], fontWeight: "bold" }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StampScreen;
