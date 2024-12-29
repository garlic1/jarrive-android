import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

const VolumeButton = ({
  color,
  soundFile,
  backgroundColor = "#FFFFFF",
  size = 30,
  onEnd = () => {},
}) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = async () => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);
    setIsPlaying(true);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish && !status.isLooping) {
        setIsPlaying(false);
        onEnd();
      }
    });

    await sound.playAsync();
  };

  const onPause = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Pressable
      style={{
        backgroundColor: backgroundColor,
        height: size,
        width: size,
        borderRadius: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
      }}
      onPress={isPlaying ? onPause : onPlay}
    >
      <Ionicons
        size={size - 10}
        name={isPlaying ? "pause" : "volume-medium"}
        color={color}
      />
    </Pressable>
  );
};

export default VolumeButton;
