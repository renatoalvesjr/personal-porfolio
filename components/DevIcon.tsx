import { Image, StyleSheet } from "react-native";

type TextImgProps = {
  icon: string;
};

const styles = StyleSheet.create({
  img: {
    height: 16,
    width: 16,
    marginEnd: 8,
  },
});

export function DevIcon({ icon }: TextImgProps) {
  let link =
    icon === "email"
      ? "https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
      : icon === "linkedin"
      ? "https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
      : icon === "github"
      ? "https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
      : "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";

  return (
    <Image
      style={styles.img}
      source={{
        uri: link,
      }}
    />
  );
}
