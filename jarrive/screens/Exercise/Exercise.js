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
  UIManager,
  findNodeHandle,
  SafeAreaView,
} from "react-native";
import backgroundChat from "../../assets/background_chat.png";
import cartePostaleFront from "../../assets/carte_postale/carte_postale_front.png";
import cartePostaleBack from "../../assets/carte_postale/carte_postale_back.png";
import stampDisabled from "../../assets/stamp_disabled.png";
import stampNormal from "../../assets/stamp.png";
import stampAchieved from "../../assets/stamp_achieved.png";
import { Ionicons } from "@expo/vector-icons";
import React, {
  createRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import exercisesHeader from "../../assets/exercices_header.png";
import VolumeButton from "../../components/VolumeButton";
import tresBien from "../../assets/tres_bien.png";

const Exercise = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("point explicatif");

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
      {activeTab === "point explicatif" && (
        <ScrollView>
          <PointExplicatifTab />
        </ScrollView>
      )}

      {activeTab === "exercicies" && <ExerciciesTab />}
    </>
  );
};

const PointExplicatifTab = () => {
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
    </ScrollView>
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

const { width, height } = Dimensions.get("window");

const questions = [
  { id: 0, text1: "Je", text2: "un facteur. ✉️", correctAnswer: "suis" },
  { id: 1, text1: "Tu", text2: "mon copain. ❤️", correctAnswer: "es" },
  { id: 2, text1: "Elle", text2: "dans un train. 🚂", correctAnswer: "est" },
  { id: 3, text1: "Nous", text2: "en voyage. ✈️", correctAnswer: "sommes" },
];

const answers = [
  { id: 2, text: "est" },
  { id: 0, text: "suis" },
  { id: 4, text: "sont" },
  { id: 1, text: "es" },
  { id: 3, text: "sommes" },
];

const CIRCLE_RADIUS = 30;

const Draggable = ({
  text,
  containerPosition,
  onCorrectAnswer,
  onWrongAnswer,
}) => {
  const positionInside = containerPosition;
  const pan = useRef(new Animated.ValueXY()).current;
  const [showDraggable, setShowDraggable] = useState(true);
  const [opacity] = useState(new Animated.Value(1));
  const positionRef = useRef(containerPosition);

  useLayoutEffect(() => {
    positionRef.current = containerPosition;
  }, [containerPosition]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gesture) => {
        if (isDropArea(gesture)) {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }).start(() => {
            setShowDraggable(false);
            onCorrectAnswer();
          });
        } else {
          onWrongAnswer();
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 5,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  useLayoutEffect(() => {
    const listener = pan.addListener((value) => value);
    return () => pan.removeListener(listener);
  }, [pan]);

  const isDropArea = (gesture) => {
    if (!positionRef.current) return false;
    const { x, y, width, height } = positionRef.current;

    return gesture.moveY > y && gesture.moveY < y + height + CIRCLE_RADIUS / 2;
  };
  if (!showDraggable) return null;

  const panStyle = {
    transform: pan.getTranslateTransform(),
    opacity,
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        panStyle,
        {
          backgroundColor: "#F5F5F5",
          height: CIRCLE_RADIUS,
          minWidth: CIRCLE_RADIUS * 2,
          borderRadius: CIRCLE_RADIUS,
          display: "flex",
          alignItems: "center",
        },
      ]}
    >
      <Text
        style={{
          color: "#4354EF",
          fontSize: 20,
          fontWeight: 600,
          paddingHorizontal: 10,
        }}
      >
        {text}
      </Text>
    </Animated.View>
  );
};

const ExerciciesTab = () => {
  const dropZoneRefs = useRef(questions.map(() => createRef()));
  const [containerPositions, setContainerPositions] = useState([]);
  const [questionIdsAnsweredCorrectly, setQuestionIdsAnsweredCorrectly] =
    useState([]);
  const [showWrongMessage, setShowWrongMessage] = useState(false);
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);

  const totalQuestions = questions.length;
  const correctAnswers = questionIdsAnsweredCorrectly.length;

  const handleDropAreaLayout = useCallback(
    (event, index) => {
      if (dropZoneRefs.current[index]) {
        dropZoneRefs.current[index].current.measureInWindow(
          (x, y, width, height) => {
            console.log(
              "x, y, width, height, index",
              x,
              y,
              width,
              height,
              index
            );
            setContainerPositions((containerPositions) => [
              ...containerPositions,
              { x, y, width, height },
            ]);
          }
        );
      }
    },
    [dropZoneRefs]
  );

  const onCorrectAnswer = (id) => {
    setQuestionIdsAnsweredCorrectly((old) => [...old, { id: id }]);
    setShowCorrectMessage(true);
    setTimeout(() => {
      setShowCorrectMessage(false);
    }, 1500);
  };

  const onWrongAnswer = () => {
    setShowWrongMessage(true);
    setTimeout(() => {
      setShowWrongMessage(false);
    }, 1500);
  };

  const isFinished =
    questionIdsAnsweredCorrectly.length === questions.length &&
    questionIdsAnsweredCorrectly.length > 0;

  useEffect(() => {
    if (questionIdsAnsweredCorrectly.length > 0) {
      setTimeout(() => {
        setShowEndScreen(true);
      }, 1000);
    }
  }, [isFinished]);

  if (showEndScreen) {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#141B23",
          zIndex: 1000,
          position: "absolute",
          top: 0,
          flex: 1,
          width: "100%",
          height: "100%",
          paddingTop: "40%",
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Image source={tresBien} style={{ width: 250, height: 320 }}></Image>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#FFFFFF" }}>
            On écoute les phrases!
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#23C86F",
            paddingVertical: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            elevation: 4,
            borderRadius: 20,
            marginTop: 20,
            marginHorizontal: 25,
            width: "85%",
          }}
          onPress={() => {
            setShowEndScreen(false);
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            CONTINUAR
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#141B23", flex: 1 }}>
      <ScrollView>
        <View
          style={{
            display: "flex",
            width: "100%",
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            gap: 32,
          }}
        >
          <ProgressBar
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
          />
          <View style={{ width: "100%", marginLeft: 30 }}>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Complete as frases:
            </Text>
          </View>
          <View style={{ alignItems: "center", gap: 8 }}>
            {questions.map((question, index) => {
              const isQuestionAnswered = questionIdsAnsweredCorrectly.find(
                ({ id }) => question.id === id
              );
              return (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                  }}
                  key={question.id}
                >
                  <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
                    {question.text1}
                  </Text>
                  <View
                    style={{
                      minWidth: CIRCLE_RADIUS * 2,
                      height: CIRCLE_RADIUS,
                      borderRadius: CIRCLE_RADIUS,
                      borderColor: isQuestionAnswered ? "#23C86F" : "#F5F5F5",
                      borderWidth: 1,
                      marginBottom: 5,
                      backgroundColor: isQuestionAnswered
                        ? "#23C86F"
                        : "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                    ref={dropZoneRefs.current[index]}
                    onLayout={(event) => handleDropAreaLayout(event, index)}
                    key={index}
                  >
                    {isQuestionAnswered && (
                      <Text
                        style={{
                          color: "#F5F5F5",
                          fontSize: 20,
                          fontWeight: 600,
                          paddingHorizontal: 10,
                        }}
                      >
                        {question.correctAnswer}
                      </Text>
                    )}
                  </View>
                  <Text style={{ color: "#FFFFFF", fontSize: 20 }}>
                    {question.text2}
                  </Text>
                </View>
              );
            })}
          </View>
          {!isFinished && (
            <View style={{ flexGrow: 1, marginBottom: 20 }}>
              <View style={styles.row}>
                {answers.map((answer, index) => (
                  <Draggable
                    text={answer.text}
                    containerPosition={containerPositions[answer.id]}
                    key={answer.id}
                    onCorrectAnswer={() => onCorrectAnswer(answer.id)}
                    onWrongAnswer={onWrongAnswer}
                  />
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      {showCorrectMessage && (
        <View
          style={{
            display: "flex",
            gap: 2,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            paddingLeft: 20,
            paddingVertical: 10,
            backgroundColor: "#23C86F",
          }}
        >
          <Ionicons name="checkmark-circle" color="white" size={24} />
          <Text style={{ flex: 1, color: "white", fontWeight: 500 }}>
            C'est correct!
          </Text>
        </View>
      )}
      {showWrongMessage && (
        <View
          style={{
            display: "flex",
            gap: 2,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#E35051",
            paddingLeft: 20,
            paddingVertical: 10,
          }}
        >
          <Ionicons name="close-circle" color="white" size={24} />
          <Text style={{ flex: 1, color: "white", fontWeight: 500 }}>
            C'est incorrect...
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const ProgressBar = ({ totalQuestions, correctAnswers }) => {
  const progress = correctAnswers / totalQuestions;

  return (
    <View
      style={{
        height: 14,
        width: "95%",
        backgroundColor: "#393B57",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
        flex: 1,
      }}
    >
      <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
  },
  ballContainer: {
    height: 150,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
  dropZone: {
    height: 200,
    backgroundColor: "#00334d",
  },
  text: {
    padding: 25,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
    marginTop: 50,
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
    backgroundColor: "#23C86F",
  },
});

export default Exercise;
