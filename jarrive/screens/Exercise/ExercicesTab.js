import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ProgressBar } from "../../components/ProgressBar";
import { CIRCLE_RADIUS, answers, audios, questions } from "./constants";
import { Draggable } from "./Draggable";
import { ListenPhrases } from "./ListenPhrases";
import { EndScreen } from "./EndScreen";

export const ExercicesTab = ({ navigate }) => {
  const dropZoneRefs = useRef(questions.map(() => createRef()));
  const [containerPositions, setContainerPositions] = useState([]);
  const [questionIdsAnsweredCorrectly, setQuestionIdsAnsweredCorrectly] =
    useState([]);
  const [audioIdsListened, setAudioIdsListened] = useState([]);
  const isListenedEcoute = audioIdsListened.find((obj) => obj?.id === 4);

  const isFinishedListening =
    audioIdsListened.length >= audios.length && audioIdsListened.length > 0;

  const [showWrongMessage, setShowWrongMessage] = useState(false);
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [showListenPhrases, setShowListenPhrases] = useState(false);

  const totalQuestions = questions.length;
  const correctAnswers = questionIdsAnsweredCorrectly.length;

  const handleDropAreaLayout = useCallback(
    (event, index) => {
      if (dropZoneRefs.current[index]) {
        dropZoneRefs.current[index].current.measureInWindow(
          (x, y, width, height) => {
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
      <EndScreen
        setShowListenPhrases={setShowListenPhrases}
        setShowEndScreen={setShowEndScreen}
      />
    );
  }

  if (showListenPhrases) {
    return (
      <ListenPhrases
        audioIdsListened={audioIdsListened}
        containerPositions={containerPositions}
        onCorrectAnswer={onCorrectAnswer}
        onWrongAnswer={onWrongAnswer}
        isListenedEcoute={isListenedEcoute}
        isFinishedListening={isFinishedListening}
        isFinished={isFinished}
        setAudioIdsListened={setAudioIdsListened}
        navigate={navigate}
      />
    );
  }

  return (
    <SafeAreaView style={completePhrasesStyles.container}>
      <ScrollView>
        <View style={completePhrasesStyles.scrollContent}>
          <ProgressBar
            totalQuestions={totalQuestions}
            correctAnswers={correctAnswers}
          />
          <View style={completePhrasesStyles.titleContainer}>
            <Text style={completePhrasesStyles.titleText}>
              Complete as frases:
            </Text>
          </View>
          <View style={completePhrasesStyles.questionContainer}>
            {questions.map((question, index) => {
              const isQuestionAnswered = questionIdsAnsweredCorrectly.find(
                ({ id }) => question.id === id
              );
              return (
                <View
                  style={completePhrasesStyles.questionRow}
                  key={question.id}
                >
                  <Text style={completePhrasesStyles.questionText}>
                    {question.text1}
                  </Text>
                  <View
                    style={completePhrasesStyles.dropZone(isQuestionAnswered)}
                    ref={dropZoneRefs.current[index]}
                    onLayout={(event) => handleDropAreaLayout(event, index)}
                  >
                    {isQuestionAnswered && (
                      <Text style={completePhrasesStyles.dropZoneText}>
                        {question.correctAnswer}
                      </Text>
                    )}
                  </View>
                  <Text style={completePhrasesStyles.questionText}>
                    {question.text2}
                  </Text>
                </View>
              );
            })}
          </View>
          {!isFinished && (
            <View style={completePhrasesStyles.draggableContainer}>
              <View style={completePhrasesStyles.row}>
                {answers.map((answer) => (
                  <Draggable
                    key={answer.id}
                    text={answer.text}
                    containerPosition={containerPositions[answer.id]}
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
        <View style={completePhrasesStyles.correctMessage}>
          <Ionicons name="checkmark-circle" color="white" size={24} />
          <Text style={completePhrasesStyles.messageText}>C'est correct!</Text>
        </View>
      )}
      {showWrongMessage && (
        <View style={completePhrasesStyles.wrongMessage}>
          <Ionicons name="close-circle" color="white" size={24} />
          <Text style={completePhrasesStyles.messageText}>
            C'est incorrect...
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const completePhrasesStyles = {
  container: {
    backgroundColor: "#141B23",
    flex: 1,
  },
  scrollContent: {
    display: "flex",
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  titleContainer: {
    width: "100%",
    marginLeft: 30,
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  questionContainer: {
    alignItems: "center",
    gap: 8,
  },
  questionRow: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  questionText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  dropZone: (isQuestionAnswered) => ({
    minWidth: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS,
    borderRadius: CIRCLE_RADIUS,
    borderColor: isQuestionAnswered ? "#23C86F" : "#F5F5F5",
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: isQuestionAnswered ? "#23C86F" : "inherit",
    display: "flex",
    alignItems: "center",
  }),
  dropZoneText: {
    color: "#F5F5F5",
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 10,
  },
  draggableContainer: {
    flexGrow: 1,
    marginBottom: 20,
  },
  correctMessage: {
    display: "flex",
    gap: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    paddingVertical: 10,
    backgroundColor: "#23C86F",
  },
  wrongMessage: {
    display: "flex",
    gap: 2,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    paddingVertical: 10,
    backgroundColor: "#E35051",
  },
  messageText: {
    flex: 1,
    color: "white",
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
};
