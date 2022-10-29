import { Box } from "@mui/system";
import {
  ColGrid,
  Col,
  Card,
  Text,
  Metric,
  Flex,
  ProgressBar,
} from "@tremor/react";
import Chart from "./Chart";
const dataFormatter = (number) => {
  return "Ksh " + Intl.NumberFormat("KE").format(number).toString();
};
function Featured() {
  return (
    <ColGrid
      numCols={1}
      numColsSm={2}
      numColsLg={3}
      gapX="gap-x-2"
      gapY="gap-y-2"
    >
      <Card maxWidth="max-w-sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            justifyItems: "space-between",
            height: "100%",
          }}
        >
          <Box>
            <Text>Total Revenue</Text>
            <Metric>{dataFormatter(71465)} </Metric>
            <Flex marginTop="mt-4">
              <Text>32% of annual target</Text>
              <Text> {dataFormatter(225000)}</Text>
            </Flex>
            <ProgressBar
              percentageValue={32}
              marginTop="mt-2"
            />
          </Box>
          <Box>
            <Text>
              Previous transactions processing. Last payments may not be
              included.
            </Text>
          </Box>
        </Box>
      </Card>
      <Col
        numColSpan={1}
        numColSpanLg={2}
      >
        <Chart />
      </Col>
    </ColGrid>
  );
}

export default Featured;
