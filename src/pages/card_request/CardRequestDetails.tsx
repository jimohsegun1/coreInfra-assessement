import Header from "../../components/Header";
import CardRequestIcon from "../../assets/icons/card_request.svg?react";
import SectionHeader from "../card_profile/components/SectionHeader";
import CardRequestDetailsForm from "./components/CardRequestDetailsForm";
import { useParams } from "react-router";

export default function CardRequestDetails() {
  const { id } = useParams();
  return (
    <>
      <Header
        path={`/card-request/${id}`}
        hasBreadcrumb={true}
        breadcrumbItems={[
          {
            label: "Card Request",
            path: "/card-request",
            icon: (
              <CardRequestIcon
                width={16}
                height={16}
                aria-hidden={true}
                stroke="#001735"
              />
            ),
          },
          {
            label: "Request Details",
            path: `/card-request/${id}`,
          },
        ]}
      />
      <main className="w-full px-5 pt-2 pb-5">
        <SectionHeader
          title="Request Details"
          description="Perform predetermined actions on card requests here."
        />
        <CardRequestDetailsForm />
      </main>
    </>
  );
}
