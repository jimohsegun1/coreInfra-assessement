import BranchesIcon from "../assets/icons/branches.svg?react";
import RolesIcon from "../assets/icons/roles.svg?react";
import UsersIcon from "../assets/icons/users.svg?react";
import CardSchemeIcon from "../assets/icons/card_scheme.svg?react";
import CardProfileIcon from "../assets/icons/card_profile.svg?react";
import CardRequestIcon from "../assets/icons/card_request.svg?react";
import StockIcon from "../assets/icons/stock.svg?react";
import CardsIcon from "../assets/icons/cards.svg?react";
import AuthorizationListIcon from "../assets/icons/authorization_list.svg?react";
import AuthorizationQueueIcon from "../assets/icons/authorization_queue.svg?react";
import TrailIcon from "../assets/icons/trail.svg?react";
import UserIcon from "../assets/icons/user.svg?react";

export const navBarMenuItems = [
  { Icon: BranchesIcon, name: "Branches", path: "." },
  { Icon: RolesIcon, name: "Roles", path: "." },
  { Icon: UsersIcon, name: "Users", path: "." },
  { Icon: CardSchemeIcon, name: "Card Scheme", path: "." },
  { Icon: CardProfileIcon, name: "Card Profile", path: "/card-profile" },
  { Icon: CardRequestIcon, name: "Card Request", path: "/card-request" },
  { Icon: StockIcon, name: "Stock", path: "." },
  { Icon: CardsIcon, name: "Cards", path: "." },
  {
    Icon: AuthorizationListIcon,
    name: "Authorization List",
    path: ".",
  },
  {
    Icon: AuthorizationQueueIcon,
    name: "Authorization Queue",
    path: ".",
  },
  { Icon: TrailIcon, name: "Trail", path: "." },
  { Icon: UserIcon, name: "Account", path: "." },
];
