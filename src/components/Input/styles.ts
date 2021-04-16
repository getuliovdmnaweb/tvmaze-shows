import { StyleSheet } from "react-native";
import { primary_blue } from "../../constants";

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 30,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    flex: 1,
    padding: 10,
    backgroundColor: primary_blue,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
});
