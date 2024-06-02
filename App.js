import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  { id: '1', title: 'Mobile Development' },
  { id: '2', title: 'App Development' },
  { id: '3', title: 'Push Ups' },
  { id: '4', title: 'Study room' },
  { id: '5', title: 'Complete assignment' },
  { id: '6', title: 'Algorithm and Data structures' },
  { id: '7', title: 'Fitness' },
  { id: '8', title: 'Code' },
  { id: '9', title: 'Interim assessment' },
  { id: '10', title: 'Workout plan' },
  { id: '11', title: 'Software development' },
  { id: '12', title: 'Metro bundler' },
  { id: '13', title: 'Cookies' },
  { id: '14', title: 'Cache' },
  { id: '15', title: 'cook' }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = DATA.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, Devs</Text>
        <Text style={styles.normalText}>14 tasks today</Text>
        <Image
          source={{
            uri: 'https://ouch-cdn2.icons8.com/D3q8fCp3QbzypA6R4avBgts4NnyISPxNsvIh6763-PA/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTQ0/LzM5ZGI2N2JlLWQx/NjEtNDBjMy05YmY4/LWIxMjRkMTI0NzQ3/MS5wbmc.png'
          }}
          style={styles.icon}
        />
      </View>

      <View style={styles.searchSection}>
        <Ionicons style={styles.searchIcon} name="search" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <Text style={styles.textCategories}>Categories</Text>

      <View style={styles.categoryContainer}>
        <View style={styles.categoryBox}>
          <Image
            source={{
              uri: 'https://ouch-cdn2.icons8.com/GQ1wS92S6x0iyNvFIaaXN4eWAj_wbl3W9NsYR3oD1yU/rs:fit:368:379/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQw/LzdkYjNlZmY0LTY2/ZTQtNDA3Yi1iMDU1/LTljYjNmYTdmYjI5/OS5wbmc.png'
            }}
            style={styles.categoryImage}
          />
          <Text style={styles.textBold}>Exercise</Text>
          <Text style={styles.textTask}>12 Tasks</Text>
        </View>

        <View style={styles.categoryBox}>
          <Image
            source={{
              uri: 'https://ouch-cdn2.icons8.com/03SeSdIC3u0ZveWvis118-iKSm4ZeL2Pnmn_SrJqDzg/rs:fit:368:330/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjk2/L2U4ZDBlMzIxLTc1/MGItNGU5Yi1hNjUw/LTU2ZmI1Nzk4M2Vk/MC5wbmc.png'
            }}
            style={styles.categoryImage}
          />
          <Text style={styles.textBold}>Study</Text>
          <Text style={styles.textTask}>12 Tasks</Text>
        </View>
      </View>

      <Text style={styles.ongoingTitle}>Ongoing Task</Text>

      <FlatList
        numColumns={1}
        horizontal={false}
        data={filteredData}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  header: {
    padding: 16,
    backgroundColor: 'white',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  normalText: {
    fontSize: 14,
    marginTop: 8,
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 16,
    right: 16,
    borderRadius: 5,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    margin: 16,
    borderRadius: 8,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
  },
  textCategories: {
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 16,
    paddingTop: 8,
    color: 'white',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  categoryBox: {
    backgroundColor: 'white',
    width: '48%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  categoryImage: {
    width: 150,
    height: 150,
  },
  textBold: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  textTask: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 4,
  },
  ongoingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingTop: 16,
    color: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
});









