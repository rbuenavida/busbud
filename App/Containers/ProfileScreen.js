import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'
import FullButton from '../Components/FullButton'

import styles from './Styles/ProfileScreenStyles'

export default class ProfileScreen extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      user: {},
      date: 0
    }
    this.renderProfile = this.renderProfile.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
  }

  componentDidMount() {
    this.fetchRandomUser()
  }

  fetchRandomUser() {
    this.setState({isLoading: true})
    fetch('https://randomuser.me/api', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((response) => {
      const user = response.results[0]
      this.setState({user, isLoading: false})
      console.log(user)
    })
  }

  onYes() {
    this.setState({date: this.state.date + 1})
    this.fetchRandomUser()
  }

  onNo() {
    this.fetchRandomUser()
  }

  renderLoading() {
    return (<Text>Is Loading ..</Text>)
  }

  fullName(name) {
    return (name && name.title) ? `${name.title} ${name.first} ${name.last}` : ''
  }

  renderProfile() {
    const fullName = this.fullName(this.state.user.name)
    return (
      <View>
        <Image source={{uri: this.state.user.picture.medium}} style={{
          backgroundColor:'#ffffff', width: 150, height: 150
        }}
        />
        <Text>{fullName}</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}><Text>Gender Neutral Dating App</Text></View>
          <View style={{flex:1}}><Text>{this.state.date}</Text></View>
        </View>
        <View>
          { this.state.isLoading && this.renderLoading() }
          { !this.state.isLoading && this.renderProfile() }
        </View>
        <View style={{flexDirection:'row', paddingTop:20}}>
          <FullButton styles={{flex: 1, borderWidth: 0, backgroundColor: '#424242'}} text="No"  onPress={() => this.onNo()}/>
          <FullButton styles={{flex: 1, borderWidth: 0, backgroundColor: '#FF6F00'}} text="Yes" onPress={() => this.onYes()} />
        </View>
      </View>
    )
  }
}
