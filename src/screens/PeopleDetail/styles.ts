import { StyleSheet } from "react-native";
import { primary_blue, primary_gray } from "../../constants";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: primary_gray,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 26,
    color: primary_blue,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailOption: {
    color: primary_blue,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  detailValue: {
    color: "white",
    fontSize: 12,
    fontFamily: "sans-serif",
  },
  infoContainer: { flex: 1, paddingHorizontal: 15 },
  infoTitle: {
    color: primary_blue,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center",
    marginBottom: 10,
  },
});
