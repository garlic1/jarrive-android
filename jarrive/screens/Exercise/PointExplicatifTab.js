import { ScrollView, Text, View } from "react-native";
import { CardWithTitle } from "./CardWithTitle";
import { ConjugatedVerb } from "./ConjugatedVerb";
import VolumeButton from "../../components/VolumeButton";

export const PointExplicatifTab = () => {
  return (
    <ScrollView>
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
                  soundFile={require("../../assets/audios/je_suis_tu_es.mp3")}
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
      />
      <CardWithTitle
        title={"Exemples"}
        content={
          <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <VolumeButton
              soundFile={require("../../assets/audios/je_suis_un_chat.mp3")}
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
              </Text>
            </Text>
          </View>
        }
      />
    </ScrollView>
  );
};
