import figma from "@figma/code-connect";
import { Image } from "primitives";

figma.connect(Image, "<FIGMA_IMAGE_IMAGE>", {
  props: {
    aspectRatio: figma.enum("Aspect Ratio", {
      "1:1": "1-1",
      "16:9": "16-9",
      "4:3": "4-3",
      Fill: "fill",
    }),
    size: figma.enum("Size", {
      Small: "small",
      Medium: "medium",
      Large: "large",
      Fill: "fill",
    }),
    variant: figma.enum("Variant", {
      Rounded: "rounded",
    }),
  },
  example: ({ ...props }) => (
    <Image alt="Descriptive alt text" src="/path/to/image.jpg" {...props} />
  ),
});
