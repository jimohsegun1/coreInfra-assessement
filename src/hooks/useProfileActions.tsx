import { CardProfileContext } from "../contexts/CardProfileContext";
import { useParams, useNavigate, useLocation } from "react-router";
import { CardProfileData } from "../types/card";
import { ProfileFormData } from "../types/card";
import { useCallback, useContext, useEffect, useState, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

type UseProfileAction = {
  handleEditButtonClick: (event: FormEvent) => void;
  handleCreateButtonClick: (event: FormEvent) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  formData: ProfileFormData;
  cardProfileToEdit: CardProfileData | undefined;
  setFormData: React.Dispatch<React.SetStateAction<ProfileFormData>>;
};

export default function useProfileActions(): UseProfileAction {
  const navigate = useNavigate();
  const location = useLocation();

  const { cardProfiles, setCardProfiles } = useContext(CardProfileContext);
  const { id } = useParams();
  const cardProfileToEdit = cardProfiles.find((profile) => profile.id === id);

  useEffect(() => {
    const isEditPage = location.pathname.includes("/card-profile/edit");
    if (!cardProfileToEdit && isEditPage) {
      navigate("/card-profile/create");
    }
  }, [cardProfileToEdit, location.pathname, navigate]);

  const [formData, setFormData] = useState<ProfileFormData>({
    id: cardProfileToEdit ? cardProfileToEdit.id : "",
    cardName: cardProfileToEdit?.cardName || "",
    cardScheme: cardProfileToEdit?.cardScheme || "Mastercard",
    description: cardProfileToEdit?.description || "",
    branchBlacklist: cardProfileToEdit?.branchBlacklist || "",
    currency: cardProfileToEdit?.currency || "NGN",
    expiration: cardProfileToEdit?.expiration
      ? Number(cardProfileToEdit?.expiration)
      : 0,
    binPrefix: cardProfileToEdit?.binPrefix || "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev: ProfileFormData) => ({
        ...prev,
        [name]: value,
      }));
    },
    [setFormData]
  );

  function handleEditButtonClick(event: FormEvent) {
    event.preventDefault();
    setCardProfiles((prevProfiles: CardProfileData[]) => {
      const updatedProfiles = prevProfiles.map((profile) => {
        if (profile.id === id) {
          return { ...profile, ...formData } as CardProfileData;
        }
        return profile;
      });
      return updatedProfiles;
    });
    navigate("/card-profile");
  }

  function handleCreateButtonClick(event: FormEvent) {
    event.preventDefault();
    setCardProfiles((prevProfiles: CardProfileData[]) => {
      const newProfileId = uuidv4();
      const date = new Date();

      const datePart = date.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const timePart = date.toLocaleString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const newProfileDateCreated = `${datePart} ${timePart}`;
      const newProfile = {
        ...formData,
        id: newProfileId,
        dateCreated: newProfileDateCreated,
      };
      return [...prevProfiles, newProfile];
    });
    navigate("/card-profile");
  }

  return {
    handleEditButtonClick,
    handleInputChange,
    formData,
    cardProfileToEdit,
    setFormData,
    handleCreateButtonClick,
  };
}
