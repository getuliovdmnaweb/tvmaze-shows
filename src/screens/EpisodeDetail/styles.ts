import { StyleSheet } from "react-native";
import { primary_blue, primary_gray } from "../../constants";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: primary_gray,
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  title: {
    color: primary_blue,
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginBottom: 20,
    textAlign: "center",
  },
  image: { width: "100%", height: 180, marginBottom: 20 },
  summary: { color: "white", textAlign: "justify" },
  fontOption: { fontSize: 16, fontWeight: "bold", color: primary_blue },
  detailRow: { flexDirection: "row", alignItems: "center" },
});
