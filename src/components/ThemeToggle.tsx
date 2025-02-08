import { useMantineColorScheme, Button } from "@mantine/core";

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Button onClick={() => toggleColorScheme()}>
      Toggle {colorScheme === "dark" ? "Light" : "Dark"} Mode
    </Button>
  );
};

export default ThemeToggle;
