import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class Loginpage extends Component{
	render(){
		return (
			<View style={styles.wrapper}>
				<View style={styles.tittleWrapper}>
					<Text style={styles.title}>Login page</Text>
				</View>
				
				<View>
					<Text style={styles.subtitle}>Powered by ----</Text>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	wrapper:{
		backgroundColor:'#f1c40f',
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	title:{
		color:'white',
		fontSize:35,
		fontWeight:'bold'
	},
	subtitle:{
		color:'white',
		fontWeight:'200'
	},
	tittleWrapper:{
		justifyContent:'center',
		flex:1
	}

});