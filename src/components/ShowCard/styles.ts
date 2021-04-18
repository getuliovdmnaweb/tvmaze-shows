import { StyleSheet } from "react-native";
import { light_blue, primary_blue } from "../../constants";

export const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: "white",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    elevation: 5,
  },
  image: { width: 160, height: 225 },
  nameContainer: { backgroundColor: primary_blue, padding: 15 },
  name: {
    fontFamily: "sans-serif",
    color: "white",
  },
  iconContainer: {
    backgroundColor: primary_blue,
    alignItems: "center",
    borderTopWidth: 1,
    paddingVertical: 5,
    borderTopColor: light_blue,
  },
});
