import React from 'react';
import { StyelSheet, Text, TextInput, View, ScrollView, Button, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { styles } from '../App';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Home'
	};

	constructor(props) {
		super(props);
		this.state = {
			report: [
				type: '',
				location: '',
				description: '',
				severity: '',
				time: '',
				photo: '',
			],
			contactInfo: [
				firstName: '',
				lastName: '',
				phoneNumber: '',
				email: '',
				contactPreferences: '',
			]
		};
	}

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
				  <Text style={styles.appTitle}>Welcome to DangerReport App</Text>
				  <Text style={styles.welcomeTxt}>Would you like to submit a new report or check a previous report status?</Text>
				</View>
				<View style={styles.buttonContainer}>
				  <Button style={styles.button} title="New Report"
						onPress={ () => navigate('Report')} />
				  <Button style={styles.button} title="Report Status"
						onPress={ () => navigate('Status')} />
				</View>
			</View>
		)
	}
}