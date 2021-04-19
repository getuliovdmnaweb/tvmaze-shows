import { StyleSheet } from "react-native";
import { primary_blue, primary_gray } from "../../../../constants";

export const styles = StyleSheet.create({
  seasonCard: {
    backgroundColor: primary_blue,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: { color: "white", fontSize: 16, fontWeight: "bold" },
  itemSeparator: { height: 100, width: 20, backgroundColor: "transparent" },
  contentContainer: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  episodeCard: { height: 150, width: 150, backgroundColor: primary_gray },
});
