import CardProfileIcon from "../../assets/icons/card_profile.svg?react";
import Header from "../../components/Header";
import SectionHeader from "./components/SectionHeader";
import ProfileDetailsForm from "./components/ProfileDetailsForm";
import FeesTable from "./components/FeesTable";
import useProfileActions from "../../hooks/useProfileActions";

interface breadcrumbItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export default function CreateProfile() {
  const breadcrumbItems: breadcrumbItem[] = [
    {
      label: "Card Profile",
      path: "/card-profile",
      icon: (
        <CardProfileIcon
          className="h-4 w-4"
          fill="#475467"
        />
      ),
    },
    {
      label: "Create Profile",
      path: "/card-profile/create",
    },
  ];

  const { formData, handleInputChange, setFormData, handleCreateButtonClick } =
    useProfileActions();

  return (
    <>
      <Header
        hasBreadcrumb={true}
        breadcrumbItems={breadcrumbItems}
      />
      <main className="w-full px-5 pt-2 pb-5">
        <SectionHeader
          title="Create Profile"
          description="Fill in profile details and add card fee."
        />
        <form
          className="mt-6"
          onSubmit={handleCreateButtonClick}>
          <ProfileDetailsForm
            formData={formData}
            handleInputChange={handleInputChange}
            setFormData={setFormData}
          />
          <FeesTable />
          <button
            type="submit"
            className="fee-btn-primary btn-animation-default mt-[35px] w-[293px]">
            Create Profile
          </button>
        </form>
      </main>
    </>
  );
}
