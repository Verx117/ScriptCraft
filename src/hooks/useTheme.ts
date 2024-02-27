import resolveConfig from "tailwindcss/resolveConfig";

import { hslToHex } from "@utils";

import tailwindConfig from "../../tailwind.config.cjs";

const getLightColor = (color: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(`--${color}`);

const getDarkColor = (color: string) =>
  getComputedStyle(document.querySelector(".dark")!).getPropertyValue(
    `--${color}`,
  );
const isDarkMode = document.documentElement.classList.contains("dark");

const getThemeColor = (color: string) => {
  if (isDarkMode) {
    return hslToHex(
      getDarkColor(color)
        .replace(/%/g, "")
        .split(" ")
        .map((value) => Number(value)),
    );
  }

  return hslToHex(
    getLightColor(color)
      .replace(/%/g, "")
      .split(" ")
      .map((value) => Number(value)),
  );
};

const useTheme = () => {
  const {
    theme: { colors },
  } = resolveConfig(tailwindConfig);

  const customColors = {
    accent: {
      DEFAULT: getThemeColor("accent"),
      foreground: getThemeColor("accent-foreground"),
    },
    background: getThemeColor("background"),
    border: getThemeColor("border"),
    card: {
      DEFAULT: getThemeColor("card"),
      foreground: getThemeColor("card-foreground"),
    },
    destructive: {
      DEFAULT: getThemeColor("destructive"),
      foreground: getThemeColor("destructive-foreground"),
    },
    foreground: getThemeColor("foreground"),
    input: getThemeColor("input"),
    muted: {
      DEFAULT: getThemeColor("muted"),
      foreground: getThemeColor("muted-foreground"),
    },
    popover: {
      DEFAULT: getThemeColor("popover"),
      foreground: getThemeColor("popover-foreground"),
    },
    primary: {
      DEFAULT: getThemeColor("primary"),
      foreground: getThemeColor("primary-foreground"),
    },
    ring: getThemeColor("ring"),
    secondary: {
      DEFAULT: getThemeColor("secondary"),
      foreground: getThemeColor("secondary-foreground"),
    },
  };

  return {
    colors: {
      ...colors,
      ...customColors,
    },
  };
};

export default useTheme;
