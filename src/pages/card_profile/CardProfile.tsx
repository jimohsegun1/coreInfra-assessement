import Header from "../../components/Header";
import SectionHeader from "./components/SectionHeader";
import SearchAndActions from "../../components/SearchAndActions";
import CardProfileIcon from "../../assets/icons/card_profile.svg?react";
import CardProfileTable from "./components/CardProfileTable";
import { CardProfileContext } from "../../contexts/CardProfileContext";
import PlusIcon from "../../assets/icons/plus.svg?react";
import { useCallback, useContext } from "react";
import { CardProfileData } from "../../types/card";

export default function CardProfile() {
  const { cardProfiles, setCardProfiles } = useContext(CardProfileContext);

  const deleteCardProfile = useCallback(
    (id: string) => {
      setCardProfiles((prevProfiles: CardProfileData[]) =>
        prevProfiles.filter((profile) => profile.id !== id)
      );
    },
    [setCardProfiles]
  );

  return (
    <>
      <Header
        path="/card-profile"
        hasBreadcrumb={false}
        icon={
          <CardProfileIcon
            width={16}
            height={16}
            aria-hidden={true}
            fill="001735"
          />
        }
        name="Card profile"
      />

      <main className="w-full px-5 pt-2 pb-5">
        <SectionHeader
          title="Card Profile"
          description="Create, view and edit card profiles here."
        />
        <SearchAndActions
          linkText="Add Profile"
          linkPath="/card-profile/create"
          icon={
            <PlusIcon
              width={16}
              height={16}
              aria-hidden={true}
              fill="001735"
            />
          }
        />
        <CardProfileTable
          data={cardProfiles}
          deleteCardProfile={deleteCardProfile}
        />
      </main>
    </>
  );
}
