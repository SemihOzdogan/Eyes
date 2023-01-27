import React from 'react';
import { View, Text, Pressable, Dimensions, StyleSheet, Image } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window')

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.mainContainer}>
            {state.routes.map((route, index) => {

                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };



                return (
                    <View key={index} style={styles.mainItemContainer}>
                        <Pressable
                            onPress={onPress}
                            style={{ width: 50, height: 50 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                {/* <Text style={{ color: "white" }}>{label}</Text> */}
                                <Image source={options.icon} style={options.style ? options.style : [styles.test, { tintColor: isFocused ? "#666C79" : "#ABB2C0" }]} resizeMode="contain" />
                                {/* <Icon name={options.icon} size={route.name === "QR" && isFocused ? 40 : 25} color={isFocused ? "#989898" : "#ddd"} /> */}
                            </View>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        // bottom: 10,
        backgroundColor: "#eee",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 10,
        elevation: 9,
        // borderRadius: 40,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginHorizontal: width * 0.08,
    },
    mainItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    test: {
        width: 30,
        height: 30,
        padding: 15
    }
})


export default TabBar; 