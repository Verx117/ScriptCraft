import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const hslToHex = (hsl: number[]) => {
  const [h, s, l] = hsl;

  // Convert hue to a value between 0 and 1
  const hue = h / 360;

  // Ensure saturation and lightness are within valid range (0 to 1)
  const saturation = s / 100;
  const lightness = l / 100;

  // Convert HSL to RGB
  const hueToRgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q =
    lightness < 0.5
      ? lightness * (1 + saturation)
      : lightness + saturation - lightness * saturation;
  const p = 2 * lightness - q;
  const r = hueToRgb(p, q, hue + 1 / 3);
  const g = hueToRgb(p, q, hue);
  const b = hueToRgb(p, q, hue - 1 / 3);

  // Convert RGB to HEX
  const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const convertColorToLottieColor = (color: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  if (!result) {
    throw new Error("Color can be only hex or rgb array (ex. [10,20,30])");
  }
  return [
    Math.round((parseInt(result[1], 16) / 255) * 1000) / 1000,
    Math.round((parseInt(result[2], 16) / 255) * 1000) / 1000,
    Math.round((parseInt(result[3], 16) / 255) * 1000) / 1000,
  ];
};
