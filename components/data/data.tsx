import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "AC",
    label: "AC",
    icon: CheckCircledIcon,
  },
  {
    value: "NOTAC",
    label: "NOTAC",
    icon: CircleIcon,
  },
  {
    value: "WA",
    label: "WA",
    icon: StopwatchIcon,
  },
  {
    value: "CE",
    label: "CE",
    icon: CrossCircledIcon,
  },
  {
    value: "RE",
    label: "RE",
    icon: CrossCircledIcon,
  },
  {
    value: "TLE",
    label: "TLE",
    icon: CrossCircledIcon,
  },
  {
    value: "MLE",
    label: "MLE",
    icon: CrossCircledIcon,
  },
  {
    value: "N/A",
    label: "N/A",
    icon: CrossCircledIcon,
  },
];

export const ratings = [
  {
    label: "800",
    value: "800",
    icon: ArrowUpIcon,
  },
  {
    label: "900",
    value: "900",
    icon: ArrowUpIcon,
  },
  {
    label: "1000",
    value: "1000",
    icon: ArrowUpIcon,
  },
];
