export type CardRequestStatus =
  | "Ready"
  | "In Progress"
  | "Acknowledged"
  | "Pending";

export interface CardRequestData {
  id: number;
  branch: string;
  initiator: string;
  quantity: string;
  batch: string;
  dateRequested: string;
  cardType: string;
  cardCharges: string;
  status: CardRequestStatus;
  downloaded: boolean;
  sentToDispatch: boolean;
}
export const cardRequestData: CardRequestData[] = [
  {
    id: 1,
    branch: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    cardType: "Instant",
    batch: "847264905",
    cardCharges: "₦1,500",
    dateRequested: "11/14/2024  10:27:43",
    status: "Ready",
    downloaded: true,
    sentToDispatch: false,
  },
  {
    id: 2,
    branch: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    cardType: "Personalized",
    batch: "847264905",
    cardCharges: "₦1,200",
    dateRequested: "11/14/2024  10:27:43",
    status: "Ready",
    downloaded: true,
    sentToDispatch: false,
  },
  {
    id: 3,
    branch: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    cardType: "Personalized",
    batch: "847264905",
    cardCharges: "₦3,000",
    dateRequested: "11/14/2024  10:27:43",
    status: "In Progress",
    downloaded: true,
    sentToDispatch: false,
  },
  {
    id: 4,
    branch: "Corporate",
    initiator: "RootUser",
    quantity: "10",
    cardType: "Instant",
    batch: "847264905",
    cardCharges: "₦0",
    dateRequested: "11/14/2024  10:27:43",
    status: "Pending",
    downloaded: false,
    sentToDispatch: false,
  },
  {
    id: 5,
    branch: "Corporate",
    initiator: "RootUser",
    cardType: "Personalized",
    quantity: "10",
    batch: "847264905",
    cardCharges: "₦1,500",
    dateRequested: "11/14/2024  10:27:43",
    status: "Acknowledged",
    downloaded: true,
    sentToDispatch: true,
  },
];
