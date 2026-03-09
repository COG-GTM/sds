import figma from "@figma/code-connect";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableRow,
} from "primitives";

figma.connect(Table, "<FIGMA_TABLE_TABLE>", {
  props: {
    dense: figma.boolean("Dense"),
    striped: figma.boolean("Striped"),
    grid: figma.boolean("Grid"),
    bleed: figma.boolean("Bleed"),
  },
  example: ({ ...props }) => (
    <Table aria-label="Example table" {...props}>
      <TableHead>
        <TableColumn isRowHeader>Name</TableColumn>
        <TableColumn>Value</TableColumn>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Row 1</TableCell>
          <TableCell>Value 1</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
});
