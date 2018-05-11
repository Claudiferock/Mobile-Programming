import React from 'react';
import { StyelSheet, Text, TextInput, View, ScrollView, Button, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { styles } from '../App';

export default class StatusScreen extends React.Component {
    static navigationOptions = {title: 'ReportStatus'}

    render() {
        const { params } = this.props.navigation.state;
        
        return (
            <View style={styles.container}>
                <View  style={styles.headerContainer}>
                    <Text style={styles.appTitle}>DangerReport App</Text>
                    <Text style={styles.subTitle}>Report Status</Text>
                </View>
                <View style={styles.buttons}>
                    <Button style={styles.button} title="New Report"
						onPress={ () => navigate('Report')} />
				    <Button style={styles.button} title="Home Page"
						onPress={ () => navigate('Home')} />
                </View>
                <View>
                    <Text>Pending</Text>
                </View>
            </View>
        )
    }

}