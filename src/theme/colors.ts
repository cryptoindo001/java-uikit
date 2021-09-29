import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "rgb(11, 133, 186)",
  primaryBright: "#67500c",
  primaryDark: "#8f6e10",
  secondary: "rgb(11, 133, 186)",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: 'rgb(11, 133, 186)',
  textDisabled: '#998c83',
  textSubtle: 'rgb(11, 133, 186)',
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "rgb(206, 194, 134)",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  // primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "rgb(206, 194, 134)",
  textDisabled: "#666171",
  textSubtle: "rgb(206, 194, 134)",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
