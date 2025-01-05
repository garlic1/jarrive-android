import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { ProgressBar } from "../../components/ProgressBar";
import VolumeButton from "../../components/VolumeButton";
import { Draggable } from "./Draggable";
import { audios, questions } from "./constants";

export const ListenPhrases = ({
  audioIdsListened,
  containerPositions,
  onCorrectAnswer,
  onWrongAnswer,
  isListenedEcoute,
  isFinishedListening,
  isFinished,
  setAudioIdsListened,
  navigate,
}) => (
  <SafeAreaView style={listenPhrasesStyles.container}>
    <ScrollView>
      <View style={listenPhrasesStyles.scrollContent}>
        <View style={listenPhrasesStyles.progressBarContainer}>
          <ProgressBar
            totalQuestions={audios.length}
            correctAnswers={audioIdsListened.length}
          />
          <View style={listenPhrasesStyles.volumeButtonRow}>
            <VolumeButton
              backgroundColor={isListenedEcoute ? "#23C86F" : "#FFFFFF"}
              color={isListenedEcoute ? "#141B23" : "#4354EF"}
              size={40}
              soundFile={audios.find((audio) => audio.id === 4).audio}
              onEnd={() => setAudioIdsListened((old) => [...old, { id: 4 }])}
            />
            <Text style={listenPhrasesStyles.underlineText}>
              On écoute les phrases!
            </Text>
          </View>
          <View style={listenPhrasesStyles.questionContainer}>
            {questions.map((question) => {
              const { audio, id } = audios.find(
                (obj) => obj.id === question.id
              );
              const isListened = audioIdsListened.find((obj) => obj.id === id);
              return (
                <View style={listenPhrasesStyles.questionRow} key={question.id}>
                  <VolumeButton
                    soundFile={audio}
                    backgroundColor={isListened ? "#23C86F" : "#FFFFFF"}
                    color={isListened ? "#141B23" : "#4354EF"}
                    onEnd={() => setAudioIdsListened((old) => [...old, { id }])}
                  />
                  <Text style={listenPhrasesStyles.questionText}>
                    {question.text1} <Text>{question.correctAnswer} </Text>
                    <Text>{question.text2}</Text>
                  </Text>
                </View>
              );
            })}
          </View>
          {!isFinished && (
            <View style={listenPhrasesStyles.draggableContainer}>
              <View style={listenPhrasesStyles.row}>
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
      </View>
      <View style={listenPhrasesStyles.buttonContainer}>
        <Pressable
          style={listenPhrasesStyles.continueButton(isFinishedListening)}
          onPress={() => navigate("FirstStamp")}
          disabled={!isFinishedListening}
        >
          <Text
            style={listenPhrasesStyles.continueButtonText(isFinishedListening)}
          >
            CONTINUAR
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const listenPhrasesStyles = {
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
  progressBarContainer: {
    display: "flex",
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  volumeButtonRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 8,
    marginLeft: 30,
  },
  underlineText: {
    color: "#FFFFFF",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  questionContainer: {
    alignItems: "flex-start",
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
  draggableContainer: {
    flexGrow: 1,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
  },
  continueButton: (isFinishedListening) => ({
    backgroundColor: isFinishedListening ? "#23C86F" : "#404040",
    paddingVertical: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 25,
    width: "85%",
  }),
  continueButtonText: (isFinishedListening) => ({
    color: isFinishedListening ? "#FFFFFF" : "#141B23",
    fontWeight: "bold",
    fontSize: 20,
  }),
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
};
