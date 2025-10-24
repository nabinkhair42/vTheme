import { getThemeColors } from "@/lib/colorUtils";
import { ChevronRight } from "lucide-react";

interface IllustrationProps {
  themeColors: ReturnType<typeof getThemeColors>;
}

export function AnalogousWheel({ themeColors }: IllustrationProps) {
  const { bgColor, primaryColor, secondaryColor } = themeColors;

  return (
    <div className="relative w-24 h-24 mx-auto my-4">
      <div className="absolute inset-0 rounded-full border border-border flex items-center justify-center overflow-hidden">
        <div
          className="absolute w-full h-full bg-linear-to-r from-(--bg-color) via-(--primary-color) to-(--secondary-color) opacity-70"
          style={
            {
              "--bg-color": bgColor,
              "--primary-color": primaryColor,
              "--secondary-color": secondaryColor,
            } as any
          }
        ></div>
        <div className="relative z-10 bg-background/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
          <span className="text-xs font-medium">Analogous</span>
        </div>
      </div>
    </div>
  );
}

export function HSVModel({ themeColors }: IllustrationProps) {
  const { primaryColor } = themeColors;

  return (
    <div className="grid grid-cols-3 gap-2 my-4">
      <div className="flex flex-col items-center">
        <div className="w-full h-8 rounded bg-linear-to-r from-[#FF0000] via-[#00FF00] to-[#0000FF]"></div>
        <span className="text-xs mt-1">Hue</span>
      </div>
      <div className="flex flex-col items-center">
        <div
          className="w-full h-8 rounded bg-linear-to-r"
          style={{
            backgroundImage: `linear-gradient(to right, ${primaryColor}20, ${primaryColor})`,
          }}
        ></div>
        <span className="text-xs mt-1">Saturation</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full h-8 rounded bg-linear-to-r from-[#000000] to-[#FFFFFF]"></div>
        <span className="text-xs mt-1">Value</span>
      </div>
    </div>
  );
}

export function CoolColors({ themeColors }: IllustrationProps) {
  const { bgColor, primaryColor, secondaryColor } = themeColors;

  return (
    <div className="flex justify-center gap-2 my-4">
      <div
        className="w-8 h-8 rounded-full"
        style={{ backgroundColor: primaryColor }}
      ></div>
      <div
        className="w-8 h-8 rounded-full"
        style={{ backgroundColor: secondaryColor }}
      ></div>
      <div
        className="w-8 h-8 rounded-full"
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
}

export function ContrastDemo({ themeColors }: IllustrationProps) {
  const { bgColor, textColor, primaryColor } = themeColors;

  return (
    <div
      className="my-4 p-3 rounded"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col gap-2">
        <div
          className="h-2 w-3/4 rounded"
          style={{ backgroundColor: textColor }}
        ></div>
        <div
          className="h-2 w-1/2 rounded"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div
          className="h-2 w-2/3 rounded"
          style={{ backgroundColor: textColor }}
        ></div>
      </div>
    </div>
  );
}

export function HierarchyDemo({ themeColors }: IllustrationProps) {
  const { bgColor, textColor, syntax } = themeColors;

  return (
    <div
      className="my-4 p-3 rounded"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col gap-2">
        <div
          className="h-2 rounded"
          style={{ backgroundColor: syntax.keyword }}
        ></div>
        <div
          className="h-2 rounded"
          style={{ backgroundColor: textColor }}
        ></div>
        <div
          className="h-2 rounded"
          style={{ backgroundColor: syntax.comment }}
        ></div>
      </div>
    </div>
  );
}

export function MinimalPalette({ themeColors }: IllustrationProps) {
  const { syntax } = themeColors;

  return (
    <div className="flex flex-wrap justify-center gap-1 my-4">
      <div
        className="w-5 h-5 rounded-full"
        style={{ backgroundColor: syntax.keyword }}
      ></div>
      <div
        className="w-5 h-5 rounded-full"
        style={{ backgroundColor: syntax.function }}
      ></div>
      <div
        className="w-5 h-5 rounded-full"
        style={{ backgroundColor: syntax.operator }}
      ></div>
      <div
        className="w-5 h-5 rounded-full"
        style={{ backgroundColor: syntax.type }}
      ></div>
      <div
        className="w-5 h-5 rounded-full"
        style={{ backgroundColor: syntax.comment }}
      ></div>
    </div>
  );
}

export function AnalogousColorHarmony({ themeColors }: IllustrationProps) {
  const { bgColor, primaryColor, secondaryColor } = themeColors;

  return (
    <div
      className="p-4 rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-between items-center">
        <div
          className="w-12 h-12 rounded-full border"
          style={{ backgroundColor: bgColor }}
        ></div>
        <ChevronRight
          className="text-(--primary-color)"
          style={{ "--primary-color": primaryColor } as any}
        />
        <div
          className="w-12 h-12 rounded-full"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <ChevronRight
          className="text-(--secondary-color)"
          style={{ "--secondary-color": secondaryColor } as any}
        />
        <div
          className="w-12 h-12 rounded-full"
          style={{ backgroundColor: secondaryColor }}
        ></div>
      </div>
    </div>
  );
}

export function ContrastReadability({ themeColors }: IllustrationProps) {
  const { bgColor, primaryColor, textColor, syntax } = themeColors;

  return (
    <div
      className="p-4 rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      <div className="space-y-3">
        <div
          className="p-2 rounded"
          style={{ backgroundColor: primaryColor }}
        >
          <div
            className="h-4 rounded w-4/5"
            style={{ backgroundColor: bgColor }}
          ></div>
        </div>
        <div
          className="p-2 rounded"
          style={{ backgroundColor: syntax.keyword }}
        >
          <div
            className="h-4 rounded w-3/5"
            style={{ backgroundColor: bgColor }}
          ></div>
        </div>
        <div
          className="p-2 rounded"
          style={{ backgroundColor: textColor }}
        >
          <div
            className="h-4 rounded w-2/3"
            style={{ backgroundColor: bgColor }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Map illustration types to their respective components
export const getColorTheoryIllustration = (
  type: string,
  themeColors: ReturnType<typeof getThemeColors>
) => {
  switch (type) {
    case "analogous-wheel":
      return <AnalogousWheel themeColors={themeColors} />;
    case "hsv-model":
      return <HSVModel themeColors={themeColors} />;
    case "cool-colors":
      return <CoolColors themeColors={themeColors} />;
    case "contrast":
      return <ContrastDemo themeColors={themeColors} />;
    case "hierarchy":
      return <HierarchyDemo themeColors={themeColors} />;
    case "minimal-palette":
      return <MinimalPalette themeColors={themeColors} />;
    default:
      return null;
  }
};