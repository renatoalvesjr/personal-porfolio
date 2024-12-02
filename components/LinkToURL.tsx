import { useCallback } from "react";
import { Alert, Text, Linking } from "react-native";

type ExternalLinkProps = {
  href: string;
  children: string;
};

export function LinkToURL({ href, children }: ExternalLinkProps) {
  const handlePress = useCallback(async () => {
    const url = await Linking.canOpenURL(href);

    if (url) {
      await Linking.openURL(href);
    } else {
      Alert.alert("Error", `Invalid URL: ${href}`);
    }
  }, [href]);

  return <Text onPress={handlePress}>{children}</Text>;
}
