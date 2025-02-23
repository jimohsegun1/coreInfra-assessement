import DashboardHeader from "../../components/Header";
import UserWelcomeBanner from "./components/UserWelcomeBanner";
import QuickAccess from "./components/QuickAccess";
import Analytics from "./components/Analytics";
import HomeIcon from "../../assets/icons/home.svg?react";
export default function Dashboard() {
  return (
    <>
      <DashboardHeader
        hasBreadcrumb={false}
        path="/"
        icon={
          <HomeIcon
            width={16}
            height={16}
            aria-hidden={true}
            stroke="#001735"
          />
        }
        name="Dashboard"
      />
      <main className="px-5 pt-2 pb-5">
        <UserWelcomeBanner />
        <QuickAccess />
        <Analytics />
      </main>
    </>
  );
}
