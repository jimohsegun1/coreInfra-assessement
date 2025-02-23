export interface CardStatus {
  status: "Active" | "Expired" | "Inactive" | "Blocked" | "Lost";
  value: number;
  color: string;
}

export const cardStatusData: CardStatus[] = [
  { status: "Active", value: 1837.5, color: "#01A4AF" },
  { status: "Inactive", value: 122.5, color: "#014DAF" },
  { status: "Blocked", value: 85.75, color: "#8020E7" },
  { status: "Lost", value: 61.25, color: "#FF4457" },
  { status: "Expired", value: 343, color: "#FFBA24" },
];
