import { Dimensions, StyleSheet } from "react-native";

const { height: sHeight } = Dimensions.get("screen");

export const SCREEN_HEIGHT = sHeight;
export const HEIGHT = sHeight * 0.8;
export const OPEN_POINT = -(sHeight * 0.6);
export const CLOSE_POINT = 0;
export const CLOSE_POINT_OFFSET = -(sHeight * 0.2);

export default StyleSheet.create({
  container: {
    position: "absolute",
    height: SCREEN_HEIGHT,
    top: SCREEN_HEIGHT,
    left: 0,
    right: 0,
    padding: 16,
    // elevation: 5,
    // shadowColor: "#151515",
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
    // justifyContent: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#151515",
  },
  handle: {
    marginBottom: 16,
    height: 3,
    width: 120,
    borderRadius: 10,
    backgroundColor: "#979797",
  },
});
