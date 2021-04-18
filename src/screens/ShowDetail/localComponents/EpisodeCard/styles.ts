import { StyleSheet } from "react-native";
import { primary_blue, primary_gray } from "../../../../constants";

export const styles = StyleSheet.create({
  episodeCard: { paddingBottom: 10, backgroundColor: primary_gray },
  image: { width: 250, height: 140, marginBottom: 10 },
  textRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  episodeTitle: { color: primary_blue, fontWeight: "bold" },
  episodeName: { color: "white", fontSize: 12, flexWrap: "wrap" },
});
