import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface Country {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
}

interface CountryDetailProps {
  country: Country;
  onBack: () => void;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country, onBack }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.countryDetail}>Nome: {country.name.common}</Text>
      <Text style={styles.countryDetail}>Capital: {country.capital.join(', ')}</Text>
      <Text style={styles.countryDetail}>Região: {country.region}</Text>
      <TouchableOpacity onPress={onBack} accessible={true} accessibilityLabel="Voltar">
        <Text style={styles.backButton}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  countryDetail: {
    fontSize: 20,
    marginVertical: 10,
  },
  backButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
});

export default CountryDetail;