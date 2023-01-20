import { StyleSheet, Text, View, StatusBar,TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        // Perform search logic here
        console.log(`Searching for: ${searchTerm}`);
      };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {/* <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity> */}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      padding: 10,
      borderRadius: 5,
    },
    input: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      width:100
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  