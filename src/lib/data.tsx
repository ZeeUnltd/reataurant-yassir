import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const areas = [
  {
    value:   "BAR",
    label:   "BAR",
    icon: QuestionMarkCircledIcon,
  },{
    value:   "MAIN ROOM",
    label:   "MAIN ROOM",
    icon: QuestionMarkCircledIcon,
  },
]

export const shifts = [
  {
    value: "BREAKFAST",
    label: "BREAKFAST",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "LUNCH",
    label: "LUNCH",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "DINNER",
    label: "DINNER",
    icon: QuestionMarkCircledIcon,
  },
]

export const statuses = [
  {
    value: "CHECKED OUT",
    label: "CHECKED OUT",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "NOT CONFIRMED",
    label: "NOT CONFIRMED",
    icon: CircleIcon,
  },
  {
    value: "CONFIRMED",
    label: "CONFIRMED",
    icon: StopwatchIcon,
  },
  {
    value: "SEATED",
    label: "SEATED",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

