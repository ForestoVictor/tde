import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Country } from './types';

interface CountryListProps {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
}

const CountryList: React.FC<CountryListProps> = ({ countries, onSelectCountry }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {countries.map((country) => (
        <TouchableOpacity key={country.cca3} onPress={() => onSelectCountry(country)} style={styles.countryContainer}>
          <Image source={{ uri: country.flags.png }} style={styles.flag} />
          <Text style={styles.countryItem}>{country.name.common}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: 20, 
  },
  countryContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  countryItem: {
    fontSize: 18,
    marginLeft: 10, 
  },
  flag: {
    width: 40, 
    height: 25, 
    resizeMode: 'contain', 
  },
});

export default CountryList;