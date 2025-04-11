import { MantineThemeOverride } from "@mantine/core";

export default <MantineThemeOverride>{
  colors: {
    sandstone: [
      "#F8F5EF",
      "#F0EAD9",
      "#E8DEC3",
      "#DED2AD",
      "#DEC091",
      "#C9A87A",
      "#B59464",
      "#A28052",
      "#9D9487",
      "#7A736A",
    ],
  },
  primaryColor: "sandstone",
  components: {
    Modal: {
      styles: (theme) => ({
        title: {
          fontSize: theme.fontSizes.lg,
          fontWeight: 700,
        },
      }),
    },
  },
};
