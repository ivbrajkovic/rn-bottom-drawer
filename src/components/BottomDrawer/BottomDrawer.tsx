import React, { FC, useEffect } from "react";
import { View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated";

import styles, {
  SCREEN_HEIGHT,
  OPEN_POINT,
  CLOSE_POINT,
  CLOSE_POINT_OFFSET,
} from "./styles";

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  stiffness: 500,
};

const BottomDrawer: FC<BottomDrawerProps> = ({ isOpen, onClose, children }) => {
  const translateY = useSharedValue(0);
  useEffect(() => {
    translateY.value = withSpring(
      isOpen ? OPEN_POINT : CLOSE_POINT,
      SPRING_CONFIG,
    );
  }, [isOpen]);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { startY: number }
  >({
    onStart(_, ctx) {
      ctx.startY = translateY.value;
    },
    onActive(event, ctx) {
      const offset = ctx.startY + event.translationY;
      translateY.value = offset < -SCREEN_HEIGHT ? -SCREEN_HEIGHT : offset;
    },
    onEnd() {
      if (
        translateY.value > CLOSE_POINT_OFFSET &&
        typeof onClose === "function"
      ) {
        runOnJS(onClose)();
      } else {
        translateY.value = withSpring(isOpen ? OPEN_POINT : CLOSE_POINT, {
          damping: 80,
          overshootClamping: true,
          restDisplacementThreshold: 0.1,
          stiffness: 500,
        });
      }
    },
  });

  const style = useAnimatedStyle(
    () => ({
      transform: [{ translateY: translateY.value }],
    }),
    [],
  );

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, style]}>
        <View style={styles.handle}></View>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default BottomDrawer;
