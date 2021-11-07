import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {IconProfileAktif} from '../../../assets';
import {colors, responsiveHeight} from '../../../utils';


export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Pak Bowo</Text>
        </View>
        <TouchableOpacity style={styles.icon}  >
          <IconProfileAktif />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125),
  },
  text: {
      marginVertical: 5,
      marginHorizontal: 5,
    color: colors.white,
  },
  icon: {
    flexDirection: 'row', justifyContent: 'flex-end',
    marginRight: 15
  },
});
