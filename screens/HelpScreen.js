import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const helplines = [
  { category: 'COVID-19 Helpline', number: '1075' },
  { category: 'Police', number: '100' },
  { category: 'Fire Brigade', number: '101' },
  // Add more helplines as needed
];

const HelpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Helpline Numbers</Text>
      {helplines.map((helpline, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.category}>{helpline.category}</Text>
          <Text style={styles.number}>{helpline.number}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  number: {
    fontSize: 16,
  },
});

export default HelpScreen;
