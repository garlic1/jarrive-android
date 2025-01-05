import {
  ImageBackground,
  Pressable,
  Text,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import exercisesHeader from "../../assets/exercices_header.png";
import VolumeButton from "../../components/VolumeButton";
import { PointExplicatifTab } from "./PointExplicatifTab";
import { ExercicesTab } from "./ExercicesTab";

const Exercise = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("point explicatif");
  const { navigate } = navigation;

  return (
    <>
      <View>
        <View style={styles.container}>
          <ImageBackground
            source={exercisesHeader}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={styles.headerContainer}>
              <View>
                <View style={styles.backButtonContainer}>
                  <Pressable>
                    <Ionicons
                      size={20}
                      name="chevron-back-outline"
                      color="#4354EF"
                    />
                  </Pressable>
                  <Text style={styles.backButtonText}>Carte Postale</Text>
                </View>
                <View style={styles.verbContainer}>
                  <Text style={styles.verbText}>Verbes</Text>
                  <Text style={styles.verbNumber}>#001</Text>
                  <Text style={styles.verbTitle}>Être</Text>
                </View>
                <VolumeButton
                  color="#4354EF"
                  onPressVolumeButton={() => {
                    /* */
                  }}
                />
              </View>
              <View style={styles.volumeButtonContainer}>
                <Pressable
                  style={styles.tabButton(activeTab === "point explicatif")}
                  onPress={() => setActiveTab("point explicatif")}
                >
                  <Text
                    style={styles.tabButtonText(
                      activeTab === "point explicatif"
                    )}
                  >
                    Point Explicatif
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.tabButton(activeTab === "exercices")}
                  onPress={() => setActiveTab("exercices")}
                >
                  <Text style={styles.tabButtonText(activeTab === "exercices")}>
                    Exercices
                  </Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      {activeTab === "point explicatif" && (
        <ScrollView>
          <PointExplicatifTab />
        </ScrollView>
      )}
      {activeTab === "exercices" && <ExercicesTab navigate={navigate} />}
    </>
  );
};

const styles = {
  container: {
    height: 300,
    marginBottom: -20,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    zIndex: 10,
  },
  headerContainer: {
    marginLeft: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  backButtonContainer: {
    marginTop: StatusBar.currentHeight + 25 || 25,
    display: "flex",
    flexDirection: "row",
    gap: 2,
  },
  backButtonText: {
    color: "#4354EF",
    fontSize: 16,
    marginBottom: 20,
  },
  verbContainer: {},
  verbText: {
    color: "#4354EF",
    fontWeight: "bold",
    fontSize: 16,
  },
  verbNumber: {
    color: "#4354EF",
    fontWeight: "bold",
    marginBottom: 30,
    fontSize: 16,
  },
  verbTitle: {
    color: "#4354EF",
    fontWeight: "900",
    fontSize: 24,
    marginBottom: 20,
  },
  volumeButtonContainer: {
    marginTop: StatusBar.height + 100 || 100,
  },
  tabButton: (isActive) => ({
    backgroundColor: isActive ? "#4354EF" : "#F5F5F5",
    borderRadius: 20,
    elevation: 4,
    paddingVertical: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 165,
    marginBottom: 10,
  }),
  tabButtonText: (isActive) => ({
    color: isActive ? "#FFFFFF" : "#D9D9D9",
    fontSize: 16,
    fontWeight: "bold",
  }),
};

export default Exercise;
