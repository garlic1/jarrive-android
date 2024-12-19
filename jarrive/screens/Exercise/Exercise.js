import {
  StyleSheet,
  PanResponder,
  Dimensions,
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
import React, { useLayoutEffect, useRef, useState } from "react";
import exercisesHeader from "../../assets/exercices_header.png";
import VolumeButton from "../../components/VolumeButton";

const Exercise = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("exercicies");

  return (
    <>
      <View>
        <View
          style={{
            height: 300,
            marginBottom: -20,
          }}
        >
          <ImageBackground
            source={exercisesHeader}
            style={{
              height: "100%",
              width: "100%",
              zIndex: 10,
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
                    style={{
                      color: "#4354EF",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
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
                        activeTab === "point explicatif"
                          ? "#FFFFFF"
                          : "#D9D9D9",
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
      </View>
      <ScrollView>
        {activeTab === "point explicatif" && <PointExplicatifTab />}
        {activeTab === "exercicies" && <DraggableQnA />}
      </ScrollView>
    </>
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
  return (
    <View
      style={{ backgroundColor: "#141B23", height: "100%", paddingTop: 20 }}
    >
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
      <Text>onwafiowhaofnaowuifnwioafniowanfowanfwefiawfb</Text>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const questions = [
  { id: 1, text: "What is the capital of France?", correctAnswer: "Paris" },
  { id: 2, text: "What is 2 + 2?", correctAnswer: "4" },
];

const answers = [
  { id: 1, text: "Paris" },
  { id: 2, text: "4" },
];

const DraggableQnA = () => {
  const [droppedAnswers, setDroppedAnswers] = useState({});
  const [correctAnswersSet, setCorrectAnswersSet] = useState(new Set());
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const totalQuestions = questions.length;
  const questionRefs = useRef({}); // Store references to question containers

  const checkDropZone = (gesture, answerText) => {
    console.log("Checking drop zones...");

    const zones = Object.entries(questionRefs.current);
    const updatedCorrectAnswersSet = new Set(correctAnswersSet);

    for (const [questionId, { ref, layout }] of zones) {
      if (!layout) {
        console.log(`Layout for question ID ${questionId} not available.`);
        continue;
      }

      const { pageX, pageY, width, height } = layout;

      if (
        gesture.moveX >= pageX &&
        gesture.moveX <= pageX + width &&
        gesture.moveY >= pageY &&
        gesture.moveY <= pageY + height
      ) {
        console.log(
          `Answer "${answerText}" dropped in question ID ${questionId}.`
        );

        const question = questions.find((q) => q.id === questionId);
        if (question) {
          if (
            answerText === question.correctAnswer &&
            !updatedCorrectAnswersSet.has(questionId)
          ) {
            updatedCorrectAnswersSet.add(questionId);
          }
        } else {
          console.log(`Question with ID ${questionId} not found.`);
        }

        setDroppedAnswers((prev) => ({
          ...prev,
          [questionId]: answerText,
        }));
      }
    }

    setCorrectAnswersSet(updatedCorrectAnswersSet);
    setCorrectAnswerCount(updatedCorrectAnswersSet.size);

    console.log(`Correct answers: ${updatedCorrectAnswersSet.size}`);
  };

  // Measure the layout of all question zones
  useLayoutEffect(() => {
    console.log("Measuring layouts for question zones...");

    const measureLayouts = () => {
      Object.entries(questionRefs.current).forEach(([questionId, { ref }]) => {
        ref.measure((x, y, width, height, pageX, pageY) => {
          questionRefs.current[questionId].layout = {
            pageX,
            pageY,
            width,
            height,
          };
          console.log(`Measured layout for question ID ${questionId}:`, {
            pageX,
            pageY,
            width,
            height,
          });
        });
      });
    };

    measureLayouts();
  }, [questions, Object.keys(questionRefs.current).length]); // Re-run layout measurement if the questions array changes

  return (
    <View style={styles.container}>
      <View style={styles.questionsContainer}>
        {questions.map((question) => (
          <View
            key={question.id}
            style={styles.questionBox}
            ref={(ref) => {
              questionRefs.current[question.id] = { ref, layout: null };
            }}
            onLayout={() => {
              questionRefs.current[question.id]?.ref?.measure(
                (x, y, width, height, pageX, pageY) => {
                  questionRefs.current[question.id].layout = {
                    pageX,
                    pageY,
                    width,
                    height,
                  };
                  console.log(`Layout for question ID ${question.id}:`, {
                    pageX,
                    pageY,
                    width,
                    height,
                  });
                }
              );
            }}
          >
            <Text style={styles.questionText}>{question.text}</Text>
            <View
              style={[
                styles.dropZone,
                droppedAnswers[question.id] === question.correctAnswer
                  ? styles.correctDropZone
                  : styles.defaultDropZone,
              ]}
            >
              <Text>{droppedAnswers[question.id] || "Drop Answer Here"}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.answersContainer}>
        {answers.map((answer) => (
          <Draggable
            key={answer.id}
            answer={answer.text}
            onDrop={(gesture) => checkDropZone(gesture, answer.text)}
          />
        ))}
      </View>
      <ProgressBar
        correctAnswers={correctAnswerCount}
        totalQuestions={totalQuestions}
      />
    </View>
  );
};

const Draggable = ({ answer, onDrop }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }, // Update position
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gesture) => {
        onDrop(gesture); // Call onDrop with gesture information
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 }, // Return to original position
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      style={[styles.draggable, pan.getLayout()]}
      {...panResponder.panHandlers}
    >
      <Text style={styles.answerText}>{answer}</Text>
    </Animated.View>
  );
};

const ProgressBar = ({ totalQuestions, correctAnswers }) => {
  const progress = correctAnswers / totalQuestions;

  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  questionsContainer: {
    flex: 2,
    marginBottom: 20,
  },
  questionBox: {
    marginBottom: 16,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  dropZone: {
    height: 50,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  defaultDropZone: {
    borderWidth: 1,
    borderColor: "#000",
  },
  correctDropZone: {
    borderWidth: 2,
    borderColor: "green",
  },
  answersContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  draggable: {
    width: 100,
    height: 50,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  answerText: {
    color: "#fff",
    fontWeight: "bold",
  },
  progressBarContainer: {
    height: 20,
    width: "80%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4caf50",
  },
});

export default Exercise;
