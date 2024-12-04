import { AnimatedImage } from "@/components/AnimatedImage";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedImage } from "@/components/ThemedImage";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Image, View } from "react-native";

export default function ProjetosScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<AnimatedImage />}
    >
      <ThemedView style={styles.content}>
        <ThemedText type="title">Projetos</ThemedText>
        <View style={{ marginVertical: 16 }} />
        <ThemedView>
          <ThemedText>
            Durante os dias 14 e 15 de setembro de 2024, participei do evento
            Ideathon 2024, onde tive a oportunidade de desenvolver um projeto de
            impacto educacional. O projeto foi desenvolvido em equipe com o
            intuito de ajudar estudantes de linguas estrangeira com um ajudante
            baseado em Linguagem Natural que lê as legendas em tempo real e
            traduz para o idioma desejado.
          </ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedImage
            src={require("@/assets/images/ezlingo.png")}
          ></ThemedImage>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  content: {
    width: "100%",
  },
});
