import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconHomeAktif,
  IconAbsen,
  IconAbsenAktif,
  IconTugas,
  IconTugasAktif,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if (label === 'Absen') {
      return isFocused ? <IconAbsenAktif /> : <IconAbsen />;
    }
    if (label === 'Tugas') {
      return isFocused ? <IconTugasAktif /> : <IconTugas />;
    }

    return <IconHome />;
  };
  return (
    <TouchableOpacity
    
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
        <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    
  },
  text : (isFocused) => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
    fontFamily: fonts.primary.bold,
  })
});
