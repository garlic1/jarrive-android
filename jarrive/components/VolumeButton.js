import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VolumeButton = ({ onPressVolumeButton }) => {
  return (
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
      onPressVolumeButton={onPressVolumeButton}
    >
      <Ionicons size={20} name="volume-medium" color="#2C327E" />
    </Pressable>
  );
};

export default VolumeButton;
