import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

type CircleButtonProps = {
    name:string;
    onPress:() => void;
}

const CircleButton:React.FC<CircleButtonProps> = (props:CircleButtonProps) => {
    const {name="",onPress = () => undefined } = props;
    return(
        <TouchableOpacity style={[styles.circleButton]} onPress={onPress}>
            <Feather name={name} size={32} color="white" />
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    circleButton:{
        backgroundColor: "#00A19D",
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 40,
        bottom: 40,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
    },
    circleButtonLabel:{
        color: "#ffffff",
        fontSize: 40,
        lineHeight: 40,
    },
})

export default CircleButton;