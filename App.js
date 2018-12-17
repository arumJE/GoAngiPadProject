/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { TabBarIOS, DatePickerIOS, Picker, TextInput, Image, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup, Icon, FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import {Fonts} from './utils/Fonts';

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
      activeBgColor: 'steelblue',
      inactiveBgColor: 'white',
      status: '',
      chosenDate: '',
      selectedIndex: 0,
      selectedIndexTwo: 0,
      value: 0,
      isDateTimePickerVisible: false
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.updateIndexTwo = this.updateIndexTwo.bind(this);

    this.updateStatus = this.updateStatus.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    let dateString = moment(date).format('MM-DD-YYYY');
    this.setState({chosenDate: dateString});
    this.setState({dob: dateString});
    this._hideDateTimePicker();
  };

  // Index is for knowing whether yes or no is selected...0 or 1 respectively
  updateIndex (selectedIndex) {
    this.setState({selectedIndex});
  }

  // Index for knowing the ideal contact method (email, call, text, opt out) 0,1,2,3 respectively
  updateIndexTwo (selectedIndexTwo) {
    this.setState({selectedIndexTwo});
  }

  // Set value for selected citizenship status
  updateStatus (value) {
    this.setState({value});
  }

  // Submit form data to server
  submitForm() {
    let data = {'lead': {
      fname: this.state.fname,
      lname: this.state.lname,
      phone: this.state.phone,
      email: this.state.email,
      zip: this.state.zip,
      dob: this.state.dob,
      status: this.state.value4,
      selectedIndex: this.state.selectedIndex,
      selectedIndexTwo: this.state.selectedIndexTwo,
      }
    };
    console.log(data);
    // fetch("https://0d7c5308-c2d2-4f85-99c4-5877092a373a.mock.pstmn.io/stuff/", {
    //   method: "POST",
    //   headers: 'headers',
    //   body:  JSON.stringify(data)
    // })
    // .then(function(response){
    //   return response.json();
    // })
    // .then(function(data){
    //   console.log(data)
    // });
  }

  render() {
    const buttons = ['YES', 'NO'];
    const { selectedIndex } = this.state;

    const buttonsTwo = ['EMAIL', 'CALL', 'TEXT', 'OPT OUT'];
    const { selectedIndexTwo } = this.state;

    let data = [
    {
      value: 'Birth',
    },
    {
      value: 'Naturalized',
    },
    {
      value: 'Dual',
    },
    {
      value: 'Non',
    }];


    return (
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./white-ang-logo.png')} />
        </View>
        <Text style={styles.subHeader}>LET'S TAKE THE FIRST STEPS!</Text>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.formItemD}>
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
                selectedValue={this.state.status}
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
                placeholder="(###) ###-####"
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
                onChangeText={(zip) => this.setState({zip})}
                value={this.state.zip}
              />
            </View>
            <View style={styles.formItemS}>
              <Text>DATE OF BIRTH*</Text>
              <View >
                <TouchableOpacity onPress={this._showDateTimePicker}>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                      style={styles.inputTextdob}
                      placeholder={this.state.chosenDate}
                      value={this.state.dob}
                    />
                    <View style={styles.iconCont}>
                      <Image style={styles.calendarIcon} source={require('./calendar.png')} />
                    </View>
                  </View>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                />
              </View>
            </View>
            <View style={styles.formItemS}>
              <Text>ARE YOU CURRENTLY OR HAVE YOU EVER BEEN IN THE MILITARY?</Text>
              <View style={styles.formItemC}>
                <ButtonGroup
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
            <View style={styles.formItemS}>
              <Text>WHAT IS YOUR CITIZENSHIP STATUS?*</Text>
              <Dropdown
                data={data}
                selectedItemColor='steelblue'
                containerStyle={{borderColor: 'steelblue', borderWidth: 1, height: 50, marginTop: 0}}
                dropdownOffset={{top: 18, left: 0}}
                valueExtractor={({value}) => value}
                onChangeText={this.updateStatus}
              />
            </View>
            <View style={styles.formItemS}>
              <Text>HOW WOULD YOU LIKE TO BE CONTACTED BY AN AIR NATIONAL GUARD RECRUITER?</Text>
              <View style={styles.formItemC}>
                <ButtonGroup
                  style={styles.buttongroupTwo}
                  onPress={this.updateIndexTwo}
                  selectedIndex={selectedIndexTwo}
                  buttons={buttonsTwo}
                  containerStyle={{height: 50, borderRadius: 50}}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.submitContainer}>
          <Button
            title="SUBMIT"
            color="white"
            backgroundColor='steelblue'
            style={styles.submit}
            onPress={this.submitForm}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>PRIVACY POLICY | TERMS OF USE</Text>
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
    fontWeight: 'bold',
    fontFamily: Fonts.Berthold
  },
  image: {
    width: 250,
    height: 75,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10
  },
  formContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  formItemD: {
    width: '50%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  formItemS: {
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  formItemC: {
    width: '100%',
  },
  inputText: {
    borderColor: 'steelblue',
    borderWidth: 1,
    height: 50
  },
  inputTextdob: {
    borderColor: 'steelblue',
    borderWidth: 1,
    height: 50,
    width: '96%'
  },
  checkbox: {
    width: 20
  },
  iconCont: {
    height: 50,
    backgroundColor: 'steelblue'
  },
  calendarIcon: {
    width: 30,
    height: 30,
    marginTop: 8
  },
  datePick: {

  },
  pickerStyle: {

  },
  buttonRow: {
    flexDirection: 'row',
  },
  buttongroup: {
    height: 50,
    borderRadius: 50
  },
  buttongroupTwo: {
    height: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 50,
    borderColor: 'steelblue'
  },
  buttonTwo: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
    borderColor: 'steelblue'
  },
  submitContainer: {
    alignItems: 'center',
    marginBottom: 40
  },
  submit: {
    width: 175,
  },
  footerContainer: {
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  footerText: {
    color: 'white',
    marginTop: 5,
    marginBottom: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
