import React from "react";
import { Text } from "react-native";
import { styles } from "../styles";

interface DetailRowProps {
  optionTitle: string;
  options: string[];
}

const DetailRow: React.FC<DetailRowProps> = ({ optionTitle, options }) => {
  return (
    <>
      <Text style={styles.detailOption}>{optionTitle}</Text>
      {options.map((option: string, index: number) => {
        if (index === options.length - 1) {
          return (
            <Text key={option} style={styles.font}>
              {option},
            </Text>
          );
        }
        return (
          <Text key={option} style={styles.font}>
            {option}.
          </Text>
        );
      })}
    </>
  );
};

export default DetailRow;
