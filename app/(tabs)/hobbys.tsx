import { AnimatedImage } from "@/components/AnimatedImage";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Image, View } from "react-native";

export default function HobbysScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<AnimatedImage />}
    >
      <ThemedView style={styles.content}>
        <ThemedText type="title">Hobbies</ThemedText>
        <View style={{ marginVertical: 16 }} />

        <ThemedView>
          <ThemedText>
            Além da programação, um dos meus maiores hobbies é jogar RPG de
            mesa. Comecei a jogar por volta de 2019 e nunca mais parei.
            Atualmente, estou desenvolvendo uma plataforma para aqueles que
            desejam organizar suas aventura em uma plataforma dedicada chamada
            Game Master Tools.
          </ThemedText>
        </ThemedView>
        <ThemedView>
          <Image
            source={require("@/assets/images/gmt.png")}
            style={styles.image}
          />
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
