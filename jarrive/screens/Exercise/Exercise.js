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
import exercisesHeader from "../../assets/exercices_header.png";
import VolumeButton from "../../components/VolumeButton";

const Exercise = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("point explicatif");

  return (
    <View>
      <View
        style={{
          height: 300,
        }}
      >
        <ImageBackground
          source={exercisesHeader}
          style={{
            height: "100%",
            width: "100%",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              marginLeft: 10,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <View
                style={{
                  marginTop: StatusBar.currentHeight + 25 || 25,
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Pressable>
                  <Ionicons
                    size={20}
                    name="chevron-back-outline"
                    color="#4354EF"
                  />
                </Pressable>
                <Text
                  style={{
                    color: "#4354EF",
                    fontSize: 16,
                    marginBottom: 20,
                  }}
                >
                  Carte Postale
                </Text>
                <View></View>
              </View>
              <View>
                <Text
                  style={{ color: "#4354EF", fontWeight: "bold", fontSize: 16 }}
                >
                  Verbes
                </Text>
                <Text
                  style={{
                    color: "#4354EF",
                    fontWeight: "bold",
                    marginBottom: 30,
                    fontSize: 16,
                  }}
                >
                  #001
                </Text>
                <Text
                  style={{
                    color: "#4354EF",
                    fontWeight: "900",
                    fontSize: 24,
                    marginBottom: 20,
                  }}
                >
                  Être
                </Text>
              </View>

              <VolumeButton
                color={"#4354EF"}
                onPressVolumeButton={() => {
                  /* */
                }}
              />
            </View>
            <View
              style={{
                marginTop: StatusBar.height + 100 || 100,
              }}
            >
              <Pressable
                style={{
                  color:
                    activeTab === "point explicatif" ? "#FFFFFF" : "#D9D9D9",
                  backgroundColor:
                    activeTab === "point explicatif" ? "#4354EF" : "#F5F5F5",
                  borderRadius: 20,
                  elevation: 4,
                  paddingVertical: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 165,
                  marginBottom: 10,
                }}
                onPress={() => setActiveTab("point explicatif")}
              >
                <Text
                  style={{
                    color:
                      activeTab === "point explicatif" ? "#FFFFFF" : "#D9D9D9",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Point Explicatif
                </Text>
              </Pressable>
              <Pressable
                style={{
                  color: activeTab === "exercicies" ? "#FFFFFF" : "#D9D9D9",
                  backgroundColor:
                    activeTab === "exercicies" ? "#4354EF" : "#F5F5F5",
                  borderRadius: 20,
                  elevation: 4,
                  paddingVertical: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 165,
                }}
                onPress={() => setActiveTab("exercicies")}
              >
                <Text
                  style={{
                    color: activeTab === "exercicies" ? "#FFFFFF" : "#D9D9D9",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Exercicies
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View>
        {activeTab === "point explicatif" && <PointExplicatifTab />}
        {activeTab === "selos" && <ExerciciesTab />}
      </View>
    </View>
  );
};

const PointExplicatifTab = () => {
  return (
    <View>
      <CardWithTitle
        title={"Conjugaison"}
        content={
          <>
            <Text style={{ fontSize: 16, color: "#787878" }}>
              O verbo{" "}
              <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                ÊTRE:{"\n"}
              </Text>
              é o verbo{" "}
              <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
                SER e ESTAR
              </Text>{" "}
              em português.{"\n"}A sua conjugação é:
            </Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <VolumeButton
                  onPressVolumeButton={() => {
                    /* */
                  }}
                  color={"#787878"}
                />
              </View>
              <View>
                <ConjugatedVerb pronoun={"Je"} conjugation={"suis"} />
                <ConjugatedVerb pronoun={"Tu"} conjugation={"es"} />
                <ConjugatedVerb pronoun={"Il"} conjugation={"est"} />
                <ConjugatedVerb pronoun={"Elle"} conjugation={"est"} />
                <ConjugatedVerb pronoun={"Nous"} conjugation={"sommes"} />
                <ConjugatedVerb pronoun={"Vous"} conjugation={"êtes"} />
                <ConjugatedVerb pronoun={"Ils"} conjugation={"sont"} />
                <ConjugatedVerb pronoun={"Elles"} conjugation={"sont"} />
              </View>
            </View>
          </>
        }
        onPressVolumeButton={() => {
          /** */
        }}
      />
      <CardWithTitle
        title={"Exemples"}
        onPressVolumeButton={() => {
          /** */
        }}
        content={
          <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <VolumeButton
              onPressVolumeButton={() => {
                /* */
              }}
              color={"#787878"}
            />
            <Text style={{ fontSize: 16, color: "#787878" }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Je suis</Text> un chat.
                {"\n"}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Tu es</Text> un human.
                {"\n"}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Nous sommes</Text> amis.
                {"\n"}
              </Text>
            </Text>
          </View>
        }
      />
    </View>
  );
};

const ConjugatedVerb = ({ pronoun, conjugation }) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: "37%",
        }}
      >
        <Text
          style={{
            width: "100%",
            fontSize: 20,
            textAlign: "right",
            color: "#787878",
          }}
        >
          {pronoun}{" "}
        </Text>
      </View>
      <View
        style={{
          width: "50%",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: 20,
            color: "#787878",
          }}
        >
          {conjugation}
        </Text>
      </View>
    </View>
  );
};

const CardWithTitle = ({ title, content }) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            color: "#4354EF",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F5F5F5",
          margin: 20,
          marginTop: 10,
          borderRadius: 20,
          padding: 12,
        }}
      >
        <View
          style={{
            margin: 12,
          }}
        >
          {content}
        </View>
      </View>
    </View>
  );
};

const ExerciciesTab = () => {
  return <></>;
};

export default Exercise;
