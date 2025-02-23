import DropDownMenu from "./DropDownMenu";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import { CardProfileData, ProfileFormData } from "../../../types/card";

interface ProfileDetailsFormProps {
  cardProfile?: CardProfileData;
  formData: ProfileFormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  setFormData: (data: ProfileFormData) => void;
}

export default function ProfileDetailsForm({
  formData,
  handleInputChange,
  setFormData,
}: ProfileDetailsFormProps) {
  return (
    <div className="w-full rounded-[10px] border border-[#e2e2e2] bg-white p-4 pb-7">
      <fieldset>
        <legend className="font-satoshi mb-6 text-[18px] leading-[18px] font-medium text-[#121212]">
          Profile Details
        </legend>

        <div className="grid w-full grid-cols-1 gap-x-[60px] gap-y-5 min-[1440px]:w-fit md:grid-cols-2 xl:gap-x-[125px]">
          <TextInput
            label="Card Name"
            inputName="cardName"
            isRequired={true}
            inputStyle="px-3.5 py-2.5"
            labelStyle="min-[1440px]:w-[448px]"
            formData={formData}
            handleInputChange={handleInputChange}
            placeholder="Enter card name"
          />

          <TextInput
            label="Bin Prefix"
            inputName="binPrefix"
            isRequired={true}
            inputStyle="px-3.5 py-2.5"
            labelStyle="min-[1440px]:w-[448px]"
            formData={formData}
            handleInputChange={handleInputChange}
            placeholder="00000000"
            maxLength={8}
            pattern="\d*"
          />

          <DropDownMenu
            formData={formData}
            handleInputChange={handleInputChange}
            label="Card Scheme"
            menuName="cardScheme"
            isRequired={true}
            options={["Verve", "Mastercard", "Visa"]}
          />

          <NumberInput
            label="Expiration"
            inputName="expiration"
            isRequired={true}
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            inputStyle="px-3.5 py-2.5"
            labelStyle="min-[1440px]:w-[448px]"
          />

          <TextInput
            label="Description"
            inputName="description"
            isRequired={false}
            inputStyle="px-3.5 py-2.5"
            labelStyle="min-[1440px]:w-[448px]"
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <DropDownMenu
            formData={formData}
            handleInputChange={handleInputChange}
            label="Currency"
            menuName="currency"
            isRequired={true}
            options={["NGN", "USD"]}
          />

          <DropDownMenu
            formData={formData}
            handleInputChange={handleInputChange}
            label="Branch Blacklist"
            menuName="branchBlacklist"
            isRequired={false}
            options={["Head Office"]}
          />
        </div>
      </fieldset>
    </div>
  );
}
