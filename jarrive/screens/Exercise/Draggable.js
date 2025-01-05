import { useLayoutEffect, useRef, useState } from "react";
import { CIRCLE_RADIUS } from "./constants";
import { Animated, PanResponder, Text } from "react-native";

export const Draggable = ({
  text,
  containerPosition,
  onCorrectAnswer,
  onWrongAnswer,
}) => {
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
    const cursorY = gesture.moveY;
    const errorMargin = height + CIRCLE_RADIUS / 2;
    const isAbove = cursorY > y && cursorY < y + errorMargin;
    const isBelow = cursorY > y && cursorY < y + height + errorMargin;

    return isAbove || isBelow;
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
