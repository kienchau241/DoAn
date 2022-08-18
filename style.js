import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
    width50:{
        width:"50%"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
    },
    img:{
        width: "65%",
        height : 80,
        resizeMode: "contain",
        justifyContent:'center'
    },
    moreBtnWhite:{
        backgroundColor: '#fff',
        borderRadius : 56,
        maxWidth: "35%",
        marginTop: 12,
        marginBottom:12,
        marginLeft: 20,
        padding: 6,
    },
    moreBtn:{
        backgroundColor: '#2a8a15',
        borderRadius : 56,
        marginTop: 12,
        marginBottom:12,
        marginLeft: 20,
        padding: 6,
    },
    whiteColor:{
        color:"#fff"
    },
    pdleft20:{
        paddingLeft: 20
    },
    pdTop10:{
        paddingTop:10
    },
    pdright20:{
        paddingRight:20
    },
    mgBot8 :{
        marginBottom:8
    }
})

const body= StyleSheet.create({
    bodyModule:{
        width:'100%',
        backgroundColor: '#252523',
        marginBottom:8,
    }
}); 

//Home
const headerStyle = StyleSheet.create({
    container : {
        width: "100%",
        backgroundColor:"#fff",
        paddingBottom: 10
    },
    txt: {
        paddingTop: 24,
        fontSize: 24
    },
    headerBtn:{
        flexDirection: 'row',
        paddingTop: 32,
        justifyContent: 'space-between'
    },
    headerBtnTxt :{
        justifyContent: 'space-between',
    }
}); 

//Booking


export { common, body }