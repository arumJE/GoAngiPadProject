/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, Image, Platform, StyleSheet, Text, View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      email: '',
      zip: '',
      dob: '',
      text: ''
    };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./white-ang-logo.png')} />
        </View>
        <Text style={styles.subHeader}>LET'S TAKE THE FIRST STEPS!</Text>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.formItemD}>
              <FormLabel>Name</FormLabel>
              <FormInput style={styles.inputText} onChangeText={(fname) => this.setState({fname})}
              value={this.state.fname} />
              <FormValidationMessage>Error message</FormValidationMessage>
              <Text>FIRST NAME*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(fname) => this.setState({fname})}
                value={this.state.fname}
              />
            </View>
            <View style={styles.formItemD}>
              <Text>LAST NAME*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(lname) => this.setState({lname})}
                value={this.state.lname}
              />
            </View>
            <View style={styles.formItemD}>
              <Text>PHONE NUMBER*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(phone) => this.setState({phone})}
                value={this.state.phone}
              />
            </View>
            <View style={styles.formItemD}>
              <Text>EMAIL*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </View>
            <View style={styles.formItemS}>
              <Text>ZIP CODE*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </View>
            <View style={styles.formItemS}>
              <Text>DATE OF BIRTH*</Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </View>
          </View>

          <View style={styles.formItemS}>
          </View>


          <View style={styles.formContainer}>

          </View>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  subHeader: {
    color: 'steelblue',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: 250,
    height: 75,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  formContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  formItemD: {
    width: '50%',
    padding: 10
  },
  formItemS: {
    width: '100%',
    padding: 10
  },
  inputText: {
    borderColor: 'steelblue',
    borderWidth: 1,
    height: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
