import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

//add
function Img(props) {
  const [selectedImage, setSelectedImage] = React.useState(null);
  this.setSelectedImage({ localUri: pickerResult.uri });
  if (this.selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }
}
//add

class forthpage extends React.Component {

  //add
  constructor(props){
    super(props);
    this.state = {
        gender : '',
        num_of_people : '',
    };
  }

  set_gender(g){
    const {gender} = this.state;
    this.setState({gender : g});
    alert('gender：' + g);
  }

  set_num(number){
    const {num_of_people} = this.state;
    this.setState({num_of_people : number});
    alert('number of people：' + number);
  }
  //add

  render() {
   
  //add
    let openCameraPickerAsync = async () => {
    
      let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }else{
        let pickerResult = await ImagePicker.launchCameraAsync();
        console.log(pickerResult);
      } 
    };

    let openImagePickerAsync = async () => {
    
      let permissionResult = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access gallery is required!');
        return;
      }else{
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
      }
    };
  //add

    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //對齊上面
          }}
        />
        <View>
          <ImageBackground
            style={styles.background}
            source={require("./1/background.jpeg")}
          > 
              {/*upperline (back icon and search) */}
              <View style={{flexDirection : "row",marginTop : "4%",marginLeft : "4%"}}>
                <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("mainpage");
              }}>
                  <Ionicons name="arrow-back" size={26*rem} color="#484848" />
                </TouchableOpacity>
                <Text style={styles.text}>SEARCH</Text>
              </View>                
            </ImageBackground>

            {/********************/}
            {/*put your code here*/}  
            <View style={{alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:17, color:'#ccc'}}>Choose tags you want</Text>
            </View>
 
            <View style={{marginLeft:'7%'}}>
              <Text style={styles.tital}>Gender</Text>
            </View>
          
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => this.set_gender('Male')} style={styles.button}>
                <Text style={styles.buttonText}>
                  Male
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.set_gender('Female')} style={styles.button}>
                <Text style={styles.buttonText}>
                  Female
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft:'7%'}}>
              <Text style={styles.tital}>Number of people</Text>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={() => this.set_num('1')} style={styles.button}>
              <Text style={styles.buttonText}>
                  1
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.set_num('2')} style={styles.button}>
                <Text style={styles.buttonText}>
                    2
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.set_num('3')} style={styles.button}>
              <Text style={styles.buttonText}>
                  3
              </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.set_num('more')} style={styles.button}>
                <Text style={styles.buttonText}>
                    more
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={{marginLeft:'7%'}}>
              <Text style={styles.tital}>Scene</Text>
            </View>

            <View style={styles.picture}>
              <Image source={require("./4/forest.jpg")} style={{ width: 230, height: 160 }} />
            </View>

          {/*  分gallery & camera  */}
            <View style={{marginTop:'1%',alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:20, color:'#bbb'}}>Upload your background picture</Text>
            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={openCameraPickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Camera</Text>
              </TouchableOpacity>
            </View>
          
          {/*  一個按鈕:gallery 
            <View style={styles.bottom_container}>
              <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Upload your background picture</Text>
              </TouchableOpacity>
            </View>
          */}  
            {/********************/}

            {/*submit button */}
            <View>
              <TouchableOpacity 
                onPress={() => {
                  this.props.navigation.navigate("fifthpage");
                }}>
                <View  style={styles.submit}> 
                  <Text style={styles.submittext}>Submit</Text> 
                </View> 
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}
  


export default forthpage;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const rem = windowWidth / 380;

const styles = StyleSheet.create({
  //style for upperline
  background : {
    height : windowHeight/14,
    width : windowWidth,
  },
  text : {
    marginLeft : "30%",
    fontSize : 18*rem,
    color : "#484848",
    fontWeight : "bold",
  },

  //put the styles you defined here
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_container:{
    margin:12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  tital:{
    fontSize: 20, 
    alignItems:'center',
    justifyContent:'flex-start',
    fontWeight:'bold',
  },
  button: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius : 10*rem,
    margin: 9,
    padding: 4,    
  },
  buttonText: {
    textAlign:'center',
    fontSize: 20,
    color: '#000',
  },
  picture:{
    marginTop:'5%',
    alignItems:'center',
    justifyContent:'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
  //style for submit button
  submit : {
    backgroundColor :"#484848",
    marginTop : "10%",
    marginLeft : "31%",
    width : "38%",
    height : "32%",
    borderRadius: 10 * rem,
    justifyContent: "center",
    alignItems: "center",  
 },
  submittext : {
    color : "white",
    fontSize : 14*rem, 
  },
});
