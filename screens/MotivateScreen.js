import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const quotes = [
  { title: 'The only way to do great work is to love what you do.' },
  { title: 'Believe you can and you’re halfway there.' },
  { title: 'Your time is limited, don’t waste it living someone else’s life.' },
  { title: '"Your vibe attracts your tribe."' },
  { title: '"Surround yourself with only people who are going to lift you higher."' },
  { title: '"Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved."' },
  { title: '"Individually, we are one drop. Together, we are an ocean."' },
  { title: '"We rise by lifting others."' },
  { title: '"A community is like a ship; everyone ought to be prepared to take the helm."' },
  { title: '"Coming together is a beginning, staying together is progress, and working together is success."' },
  { title: '"Great things in business are never done by one person; they’re done by a team of people."' },
];

const MotivatingScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {quotes.map((quote, index) => (
        <View style={[styles.card, { backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }]} key={index}>
          <Text style={styles.title}>{quote.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#304866', // Light blue background color
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: 'center',
  },
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MotivatingScreen;
