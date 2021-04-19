import { StyleSheet } from "react-native";
import { primary_blue, primary_gray } from "../../constants";

export const styles = StyleSheet.create({
  title: {
    color: primary_blue,
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginBottom: 20,
    textAlign: "center",
  },
  dropDown: {
    backgroundColor: primary_blue,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignSelf: "center",
    padding: 10,
    marginBottom: 10,
  },
  dropdownText: { color: "white", fontSize: 16, fontWeight: "bold" },
  dropdownSelect: {
    opacity: 1,
    backgroundColor: primary_gray,
    elevation: 3,
    borderWidth: 2,
    borderColor: primary_blue,
    width: "85.5%",
    alignSelf: "center",
  },
  dropdownOption: {
    borderBottomWidth: 2,
    borderColor: primary_blue,
    padding: 10,
  },
  dropdownOptionText: { fontSize: 16, fontWeight: "bold", color: primary_blue },
});
