import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';

const ChatBubble = ({role,text,onSpeech}) => {
    return(
        <View
            style={[
                styles.chatItem,
                role === "user" ? styles.userChatItem : styles.modelChatItem,
            ]}
            >
                <Text style={styles.chatText}>{text}</Text>
                {role === "model" && (
                    <TouchableOpacity onPress={onSpeech} style={styles.speakerIcon}>
                        <IonIcon name="volume-high-outline" size={24} color="#fff"/>
                    </TouchableOpacity>
                )}
            </View>
    )
}

const styles = StyleSheet.create({
    chatItem:{
        marginBottom:10,
        padding:10,
        borderRadius:10,
        maxWidth:"70%",
        position:"relative"
    },
    userChatItem:{
        alignSelf:"flex-end",
        backgroundColor: "#007AFF"
    },
    modelChatItem:{
        alignSelf:"flex-start",
        backgroundColor: "#007AAA"
    },
    chatText:{
        fontSize:16,
        color:"#fff"
    },
    speakIcon:{
        position:"absolute",
        bottom:5,
        right:5,
    }
})

export default ChatBubble;