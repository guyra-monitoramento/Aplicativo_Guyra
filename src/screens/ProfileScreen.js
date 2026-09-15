import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import ScreenWithTabBar from "../components/TabBar";

const ProfileScreen = ({ navigation }) => {
  const [imagemUri, setImagemUri] = useState(null);

  const selecionarImagem = async () => {
    const permissaoResultado =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissaoResultado.granted) {
      Alert.alert(
        "Permissão necessária",
        "A permissão para acessar a galeria é obrigatória."
      );
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagemUri(resultado.assets[0].uri);
    }
  };

  return (
    <ScreenWithTabBar>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Seu perfil</Text>

        <View style={styles.profileCard}>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Nikolas Ferreira</Text>

            <View style={styles.emailContainer}>
              <Ionicons name="mail-outline" size={20} color="#687386" />

              <Text style={styles.email}>nicknicks@email.com</Text>
            </View>
          </View>

          <View style={styles.photoContainer}>
            <TouchableOpacity
              style={styles.photo}
              activeOpacity={0.8}
              onPress={selecionarImagem}
            >
              {imagemUri ? (
                <Image source={{ uri: imagemUri }} style={styles.photoImage} />
              ) : (
                <Ionicons name="person" size={58} color="#F3680A" />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={selecionarImagem} activeOpacity={0.8}>
              <Text style={styles.addPhoto}>
                {imagemUri ? "Trocar foto" : "Adicionar foto"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dataCard}>
          <View style={styles.dataTitleContainer}>
            <View style={styles.titleIcon}>
              <Ionicons name="person" size={26} color="#F3680A" />
            </View>

            <Text style={styles.dataTitle}>Seus dados</Text>
          </View>

          <TouchableOpacity style={styles.dataItem} activeOpacity={0.8}>
            <View style={styles.dataIcon}>
              <Ionicons name="mail-outline" size={26} color="#F3680A" />
            </View>

            <View style={styles.dataText}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>nicknicks@email.com</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dataItem} activeOpacity={0.8}>
            <View style={styles.dataIcon}>
              <Ionicons name="call-outline" size={26} color="#F3680A" />
            </View>

            <View style={styles.dataText}>
              <Text style={styles.label}>Telefone</Text>
              <Text style={styles.value}>+55 (19) xxxx-9352</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dataItem} activeOpacity={0.8}>
            <View style={styles.dataIcon}>
              <Ionicons name="lock-closed-outline" size={26} color="#F3680A" />
            </View>

            <View style={styles.dataText}>
              <Text style={styles.label}>Senha</Text>
              <Text style={styles.value}>••••••••••••</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dataItem} activeOpacity={0.8}>
            <View style={styles.dataIcon}>
              <Ionicons name="home-outline" size={26} color="#F3680A" />
            </View>

            <View style={styles.dataText}>
              <Text style={styles.label}>Porte do viveiro</Text>
              <Text style={styles.value}>médio</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Ionicons name="create-outline" size={26} color="#FFFFFF" />

            <Text style={styles.editButtonText}>Editar dados</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </ScreenWithTabBar>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 25,
    paddingBottom: 20,
  },

  title: {
    width: "100%",
    maxWidth: 500,
    color: "#F3680A",
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 20,
  },

  profileCard: {
    width: "100%",
    maxWidth: 500,
    minHeight: 180,

    backgroundColor: "#FAD7B5",

    borderRadius: 24,

    paddingHorizontal: 22,
    paddingVertical: 22,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 22,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  profileInfo: {
    flex: 1,
    paddingRight: 10,
  },

  name: {
    color: "#111827",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
  },

  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  email: {
    color: "#687386",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 7,
    flexShrink: 1,
  },

  photoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 105,
  },

  photo: {
    width: 88,
    height: 88,
    borderRadius: 44,

    backgroundColor: "#FFE9D7",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 4,
    borderColor: "#FFFFFF",

    overflow: "hidden",
  },

  photoImage: {
    width: "100%",
    height: "100%",
  },

  addPhoto: {
    color: "#687386",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
  },

  dataCard: {
    width: "100%",
    maxWidth: 500,

    backgroundColor: "#FFFFFF",

    borderRadius: 24,

    paddingHorizontal: 18,
    paddingVertical: 22,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  dataTitleContainer: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 18,
    paddingHorizontal: 2,
  },

  titleIcon: {
    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: "#FFF0E5",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  dataTitle: {
    color: "#111827",
    fontSize: 28,
    fontWeight: "700",
  },

  dataItem: {
    width: "100%",
    minHeight: 82,

    backgroundColor: "#F8F8FA",

    borderRadius: 16,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 12,
    paddingVertical: 10,

    marginBottom: 12,
  },

  dataIcon: {
    width: 52,
    height: 52,

    borderRadius: 26,

    backgroundColor: "#FFF0E5",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  dataText: {
    flex: 1,
    minWidth: 0,
  },

  label: {
    color: "#687386",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 3,
  },

  value: {
    color: "#111827",
    fontSize: 17,
    fontWeight: "600",
  },

  editButton: {
    width: "100%",
    minHeight: 58,

    backgroundColor: "#F3680A",

    borderRadius: 14,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 12,
  },

  editButtonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 10,
  },

  bottomSpace: {
    height: 100,
  },
});