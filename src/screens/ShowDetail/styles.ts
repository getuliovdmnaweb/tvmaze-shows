import { StyleSheet } from "react-native";
import { primary_blue } from "../../constants";

export const styles = StyleSheet.create({
  title: {
    color: primary_blue,
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginBottom: 20,
    textAlign: "center",
  },
  header: { flexDirection: "row", marginBottom: 20 },
  image: { width: 160, height: 225 },
  detailContainer: { flex: 1, paddingLeft: 10 },
  detailTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  detailOption: { color: primary_blue, fontWeight: "bold", fontSize: 16 },
  font: { color: "white", fontSize: 12 },
});
