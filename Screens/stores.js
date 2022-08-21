import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View, ScrollView, SectionList, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 






export default function Stores({navigation}){
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    return(
        
        <SafeAreaView style ={{flex : 1 }}>
            <View style = {[styles.shadowEffect]}>
                <View style={styles.header}>
                <Text style={styles.headerText}>Tìm Cửa Hàng </Text>
                </View>

                <View style={styles.find}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={number}
                    placeholder="Tìm Cửa Hàng Bạn Muốn" 
                    />
                </View>
            </View>

            <View style = {styles.mapkit}>
                <Image 
                    style={{width: 500, height: 350}}
                    source={require('../assets/image/mapdemo.png')}
                />
            </View>


            <View style={styles.list}>
            <SectionList
                sections={[
                {title: 'Gần Bạn', data: ['Emart', 'Sense City', 'Pear Plaza', 'Phan Xich Long', 'Golden Mansion', 'Landmard 81', 'Ibis','Nguyễn Văn Trỗi','Saigon Pearl','Thao Dien']},
                {title: 'Tất Cả', data: ['Aeon Mall Hà Đông', 'Bà Nà Hill', 'Bà Nà Kiosk', 'Bà Triệu', 'Bạch Đằng', 'Charmvit', 'CMT8','Crescent Strip','Đông Du','Duy Tân']},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}         
                />    
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header:{
         width: "100%",
         backgroundColor:"#fff",
         paddingBottom: 10,
    },
    headerText:{
         paddingTop: 80,
         fontSize: 30,
         paddingLeft: 20,
         fontWeight: 'bold',
    },
    list:{
        width: "100%",
        height: 200,
        backgroundColor:"#fff",
    },

    
    sectionHeader: {
        
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
      },

    item: {
        padding: 10,
        fontSize: 15,
        height: 44,
        fontWeight: '400',
      },
    find:{
        backgroundColor:"#fff",
    },
    input: {
        height: 40,
        margin: 12,
        fontSize: 15,
        padding: 10,
        
    },
    mapkit: {

        alignItems: 'center',
    },
    shadowEffect:{
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
});
