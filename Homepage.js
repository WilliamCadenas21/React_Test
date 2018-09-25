import React, {Component} from 'react';
import {Platform, View, Text, StyleSheet,TouchableOpacity} from 'react-native';

export default class Homepage extends Component{
	render(){
        return(
            <View style = { styles.MainContainer }>
				<View style={styles.headerBox}>
					<Text style={styles.car}>Car<Text style={styles.pool}>Pool</Text></Text>
					<Text style={styles.vita}>V    I    T    A</Text>
				</View>
				
				<View style={styles.buttons}>
					<TouchableOpacity
			          style={styles.b1}
			          underlayColor='#fff'>
			          <Text style={styles.submitText}>Iniciar Sesión</Text>
			 		</TouchableOpacity>

			 		<TouchableOpacity
			          style={styles.b2}
			          underlayColor='#fff'>
			          <Text style={styles.submitText}>Registrarse</Text>
			 		</TouchableOpacity>
				</View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
	headerBox:{
        alignItems: 'center',
        justifyContent: 'center',
	},
	submitText:{
		paddingTop:20,
		fontSize:15,
      	textAlign:'center',
		color:'white'
	},
  b1:{
  	width:'50%',
  	height:50,
    backgroundColor:'#F5A623',
  },
  b2:{
  	width:'50%',
  	height:50,
    backgroundColor:'#4A90E2',
  },
	buttons:{
		width:'100%',
		position: 'absolute',
		bottom:0,
		flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
	},
	vita:{
		marginTop:-10,
		color:'gray',
		fontSize:10
	},
    car:{
    	marginTop:'15%',
    	color:'#ECA228',
    	fontSize:64
    },
    pool:{
    	color:'#237EE7',
    	fontSize:64

    },
    MainContainer:{
        flex: 1
    }
});