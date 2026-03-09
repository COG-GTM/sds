import figma from "@figma/code-connect";
import { Link } from "primitives";

figma.connect(Link, "<FIGMA_LINK_LINK>", {
  props: {
    label: figma.string("Label"),
  },
  example: ({ label }) => <Link href="https://example.com">{label}</Link>,
});
