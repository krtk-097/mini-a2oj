export type Option = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type Question = {
  _id: string;
  index: string;
  name: string;
  tags: string[];
  rating: number;
  frequency: number;
  contestId: string;
  status: ProblemStatus;
};

export enum ProblemStatus {
  AC = "AC",
  NOTAC = "NOTAC",
  WA = "WA",
  CE = "CE",
  RE = "RE",
  MLE = "MLE",
  TLE = "TLE",
  NONE = "N/A",
}

export interface DataTableSearchableColumn<TData> {
  id: keyof TData;
  title: string;
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[];
}
