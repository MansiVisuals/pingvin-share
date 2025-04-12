import { MantineThemeOverride } from "@mantine/core";

// Define font constants to avoid duplication
const HEADING_FONT = "Ubuntu";
const BODY_FONT = "Josefin Sans";

export default <MantineThemeOverride>{
  fontFamily: `${BODY_FONT}, sans-serif`,
  headings: {
    fontFamily: `${HEADING_FONT}, sans-serif`,
  },
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
          fontFamily: HEADING_FONT,
        },
      }),
    },
    Button: {
      styles: (theme) => ({
        root: {
          fontFamily: HEADING_FONT,
        },
      }),
    },
    Tabs: {
      styles: (theme) => ({
        tabLabel: {
          fontFamily: HEADING_FONT,
        },
      }),
    },
  },
};
