import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const handleYouTubePress = () => {
    Linking.openURL('https://www.youtube.com/channel/UCfmBTWz7fCcrFNavEbtwQpA');
  };

  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/YourFacebookProfile');
  };

  const handleMailPress = () => {
    Linking.openURL('mailto:hardik.bhaskar2010@gmail.com');
  };

  const handleCallPress = () => {
    Linking.openURL('tel:+919599891970');
  };

  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>Social Work App</Text>
        
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Change.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Separate card for social media and contact icons */}
      <View style={styles.socialCard}>
        <Text style={styles.socialTitle}>Connect with Us</Text>
        <View style={styles.socialIcons}>
          {/* YouTube icon */}
          <TouchableOpacity onPress={handleYouTubePress}>
            <FontAwesome name="youtube-play" size={24} color="#FF0000" style={styles.icon} />
          </TouchableOpacity>
          {/* Facebook icon */}
          <TouchableOpacity onPress={handleFacebookPress}>
            <FontAwesome name="facebook" size={24} color="#3b5998" style={styles.icon} />
          </TouchableOpacity>
          {/* Mail icon */}
          <TouchableOpacity onPress={handleMailPress}>
            <Ionicons name="mail" size={24} color="#000" style={styles.icon} />
          </TouchableOpacity>
          {/* Call icon */}
          <TouchableOpacity onPress={handleCallPress}>
            <Ionicons name="call" size={24} color="#000" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#192841',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  socialCard: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
  },
  socialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default HomeScreen;
