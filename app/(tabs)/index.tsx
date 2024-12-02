import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinkToURL } from "@/components/LinkToURL";
import { LinkToMail } from "@/components/LinkToMail";
import { DevIcon } from "@/components/DevIcon";
import { View } from "react-native";
import { AnimatedImage } from "@/components/AnimatedImage";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<AnimatedImage />}
    >
      <ThemedView style={styles.content}>
        <ThemedText type="title">Renato Alves Junior</ThemedText>
        <View style={{ marginVertical: 16 }} />

        <ThemedView>
          <ThemedText type="subtitle">Sobre mim</ThemedText>
          <ThemedView>
            <ThemedText>
              Sou um desenvolvedor de software com experiência em
              desenvolvimento de aplicativos web e desktop.
            </ThemedText>
            <ThemedText>
              Atualmente estou cursando o 3º período do curso de Análise e
              Desenvolvimento de Sistemas no Instituo Federal do Triângulo
              Mineiro (IFTM).
            </ThemedText>
            <ThemedText>
              Estou sempre em busca de novos desafios e conhecimentos.
            </ThemedText>
            <ThemedText>
              Atualmente trabalho há 6 meses como desenvolvedor web na empresa{" "}
              {"CODIUB"} em Uberaba, Minas Gerais.
            </ThemedText>
          </ThemedView>
          <View style={{ marginVertical: 16 }} />
          <ThemedText type="subtitle">Contato</ThemedText>
          <ThemedView>
            <ThemedText>
              <DevIcon icon="email" />
              E-mail:{" "}
              <ThemedText type="link">
                <LinkToMail href="renato.alvesjr00@gmail.com">
                  renato.alvesjr00@gmail.com
                </LinkToMail>
              </ThemedText>
            </ThemedText>
            <ThemedText>
              <DevIcon icon="linkedin" />
              LinkedIn:{" "}
              <ThemedText type="link">
                <LinkToURL href="https://www.linkedin.com/in/renato-alves88/">
                  @renato-alves88
                </LinkToURL>
              </ThemedText>
            </ThemedText>
            <ThemedText>
              <DevIcon icon="github" />
              Github:{" "}
              <ThemedText type="link">
                <LinkToURL href="https://www.github.com/renatoalvesjr">
                  @renatoalvesjr
                </LinkToURL>
              </ThemedText>
            </ThemedText>
          </ThemedView>
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  content: {
    width: "100%",
  },
});
