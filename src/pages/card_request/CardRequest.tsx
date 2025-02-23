import Header from "../../components/Header";
import CardRequestIcon from "../../assets/icons/card_request.svg?react";
import SectionHeader from "../card_profile/components/SectionHeader";
import SearchAndActions from "../../components/SearchAndActions";
import CardRequestTable from "./components/CardRequestTable";

export default function CardRequest() {
  return (
    <>
      <Header
        path="/card-request"
        hasBreadcrumb={false}
        icon={
          <CardRequestIcon
            width={16}
            height={16}
            aria-hidden={true}
            stroke="#001735"
          />
        }
        name="Card Request"
      />

      <main className="w-full px-5 pt-2 pb-5">
        <SectionHeader
          title="Card Request"
          description="View and attend to card requests here."
        />
        <SearchAndActions />
        <CardRequestTable />
      </main>
    </>
  );
}
