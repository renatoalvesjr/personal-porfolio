import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { AnimatedImage } from "@/components/AnimatedImage";
import { AnimatedError } from "@/components/AnimatedError";

export default function NotFoundScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<AnimatedError />}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title">Página não encontrada</ThemedText>
        <ThemedText>
          A página que você está tentando acessar não existe ou foi removida.
        </ThemedText>
        <Link href={"/"}>
          <ThemedText type="link" style={styles.link}>
            Voltar para a página inicial
          </ThemedText>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
