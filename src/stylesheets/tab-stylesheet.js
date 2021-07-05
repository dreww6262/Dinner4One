import * as React from 'react';
import {StyleSheet} from 'react-native';
import {headerColor, subHeaderTextColor, tintColor, screenBackgroundColor, headerTextColor} from './color-sheme';

export const tabStylesheet = StyleSheet.create({
  header: {
    backgroundColor: headerColor,
  },
  headerTitle: {
    color: headerTextColor,
    fontSize: 24
  },
  screenBackground: {
    backgroundColor: screenBackgroundColor,
    flex: 1
  },
  subheaderText: {
    color: subHeaderTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  }
});
