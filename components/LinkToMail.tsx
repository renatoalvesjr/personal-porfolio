import { useCallback } from "react";
import { Alert, Text, Linking } from "react-native";

type ExternalLinkProps = {
  href: string;
  children: string;
};

export function LinkToMail({ href, children }: ExternalLinkProps) {
  const handlePress = useCallback(async () => {
    await Linking.openURL(`mailto:${href}`);
  }, [href]);

  return <Text onPress={handlePress}>{children}</Text>;
}
