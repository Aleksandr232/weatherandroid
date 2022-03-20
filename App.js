import React,{useState} from 'react';

import { StyleSheet,  View, TextInput, ImageBackground, Text, Button, LogBox} from 'react-native';

const api = {
  key: "af3904bcfb9954b533100c6413793863",
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  

  const search =  () => {
     return fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const imge ={uri :'https://raw.githubusercontent.com/Aleksandr232/weather/master/src/assets/cold-bg.jpg'}

  return (
        <View style={styles.container}>
          <ImageBackground source={imge} style={{width: '100%', height: '100%'}}>
              <TextInput
              type="text"
              style={{ color: "black",
              flex: 1,
              width:'100%',
              height: 100,
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              bottom: 20,
              right:100,            
              }}
              placeholder="Search..."
              onChangeText={setQuery}
              value={query}
              />
                <Button style={{
                  flex: 2,
                  width: 20,
                  height: 100,
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  bottom: 20,
                  right:100, 
                }}
                    title='поиск'
                    onPress={search}>
                </Button>
                <View style={styles.textview}>
                <Text style={styles.text}>{weather.name},  {weather.sys?.country},  {Math.round(weather.main?.temp)}°c</Text>     
                <Text style={styles.text}>{dateBuilder(new Date())}</Text>     
                </View>
          </ImageBackground>  
        </View>
        
      
     
         
    
  );
  

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    bottom: 150,
    textAlign: 'center',
    color:'black',
    shadowColor: "rgb(120,124,255)",
    shadowOffset: {width:1,height: 3},
    shadowOpacity: 3,
    shadowRadius: 10,
    fontSize: 30,
    color: "rgb(120,124,255)",
    padding: 23
  },
  textview:{
    textAlign: 'center',
    width: 300,
    left: 50
  },
  button:{
    flex: 1,
    width: 100,
    left: 270,
    color: "black",
    height: 100,
    fontSize: 20,
    
  }              
              
  
  
  
  
});
