import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { ShowCard } from "../../components";
import { styles } from "./styles";
import { usePeopleShows } from "../../hooks";
import { Show } from "../../types";
import { LoadingPeopleShows } from "../../wrappers";

interface Props {
  route: any;
}

interface DetailRowProps {
  detailOption: string;
  detailValue: string;
}

const DetailRow: React.FC<DetailRowProps> = ({ detailOption, detailValue }) => {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailOption}>{detailOption}</Text>
      <Text style={styles.detailValue}>{detailValue}</Text>
    </View>
  );
};

const PeopleDetail: React.FC<Props> = ({ route }) => {
  const { person } = route.params;
  const { personShows } = usePeopleShows(person);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>{person.name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 150, height: 200 }}
            source={{ uri: person.image?.medium }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Person Info</Text>
            <DetailRow detailOption="Gender: " detailValue={person.gender} />
            <DetailRow detailOption="Age: " detailValue={person.age} />
            <DetailRow
              detailOption="Birthday: "
              detailValue={person.birthday}
            />
            <DetailRow
              detailOption="Born in: "
              detailValue={person.country?.name}
            />
          </View>
        </View>
      </View>
      <Text style={styles.title}>Known For</Text>
      <LoadingPeopleShows>
        <FlatList
          testID="heroes-list"
          data={personShows}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
          keyExtractor={(item: Show) => item.id}
          renderItem={({ item }) => (
            <ShowCard heartBroken={false} show={item} />
          )}
        />
      </LoadingPeopleShows>
    </View>
  );
};

export default PeopleDetail;
