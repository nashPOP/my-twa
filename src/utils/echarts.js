// Import the core module of echarts, which provides essential interfaces for using echarts.
import * as echarts from "echarts/core";

// Import chart modules, where the suffix for chart modules is Chart
import { BarChart, LineChart, GaugeChart } from "echarts/charts";

// Import components for tooltip, title, grid, dataset, and data transformation.
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";

// Features like label layout and global animation transitions.
import { LabelLayout, UniversalTransition } from "echarts/features";

// Import the Canvas renderer, and note that importing either CanvasRenderer or SVGRenderer is necessary.
import { CanvasRenderer } from "echarts/renderers";

// Register the necessary components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  BarChart,
  LineChart,
  GaugeChart,
]);

export { echarts };
