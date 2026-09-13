import { StyleSheet, View, Text } from "react-native";

import ScreenWithTabBar from "../components/TabBar";

const ProfileScreen = () => {

    return (
        <ScreenWithTabBar>
            <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Text>Perfil</Text>
                    <View>

                    </View>
                </View>
            </ScrollView>
        </ScreenWithTabBar>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 75,
        paddingBottom: 40,
    },
});