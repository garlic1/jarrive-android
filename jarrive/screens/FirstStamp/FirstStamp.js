import { Image, Pressable, SafeAreaView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

const FirstStamp = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, height: "100%", alignItems: "center", gap: 50 }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 30,
            color: "#4354EF",
            width: "80%",
          }}
        >
          Você resgatou seu primeiro selo!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#4354EF",
          width: "85%",
          elevation: 4,
          borderRadius: 25,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            gap: 4
          }}
        >
          <Ionicons name="checkmark-circle" color="white" size={24} />
          <Text style={{ fontSize: 18, color: "#FFFFFF" }}>
            Completou as tarefas do selo Être!
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/first_stamp.png")}
          style={{ width: 329, height: 208 }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#4354EF",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          width: "100%",
          paddingHorizontal: 45,
          gap: 24,
          paddingTop: 35,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#FFFFFF" }}>
          Sua coleção de selos começou! Complete sua coleção!
        </Text>
        <Text style={{ fontSize: 16, color: "#FFFFFF" }}>
          Selos são lições rápidas para auxiliar no seu aprendizado da língua
          francesa.
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#FFFFFF" }}>
          Faça o login para realizar as próximas lições!
        </Text>
        <Pressable
          style={{
            backgroundColor: "#23C86F",
            paddingVertical: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            elevation: 4,
            borderRadius: 20,
            marginBottom: 10
          }}
          onPress={() => navigation.navigate("Log in")}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            <Text>FAZER LOGIN</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default FirstStamp;
