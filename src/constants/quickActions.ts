import CardSheild from "../assets/icons/credit_card_shield.svg?react";
import CreditCard from "../assets/icons/credit_card.svg?react";
import CreditCardEdit from "../assets/icons/credit_card_edit.svg?react";
import CardRequest from "../assets/icons/card_request.svg?react";

interface QuickAction {
  action: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}

const quickActions: QuickAction[] = [
  {
    action: "Manage a Card",
    Icon: CardSheild,
    link: "/card-profile",
  },
  {
    action: "Issue Instant Card",
    Icon: CreditCard,
    link: ".",
  },
  {
    action: "Issue Personalized Card",
    Icon: CreditCardEdit,
    link: ".",
  },
  {
    action: "Review Card Requests",
    Icon: CardRequest,
    link: "/card-request",
  },
];

export default quickActions;
