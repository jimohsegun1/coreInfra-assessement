import NumberInput from "./NumberInput";
import TextInput from "./TextInput";
import { useState } from "react";
import RadioGroup from "./RadioGroup";

export interface FeeFormData {
  feeName: string;
  feeAmount: string;
  currency: string;
  feeFrequency: string;
  feeImpact: string;
  accountPad: string;
  account: string;
}

export default function AddFeeForm() {
  const [formData, setFormData] = useState<FeeFormData>({
    feeName: "",
    feeAmount: "",
    currency: "",
    feeFrequency: "",
    feeImpact: "",
    accountPad: "",
    account: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    groupName?: string
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [groupName || name]: value,
    }));
  };

  return (
    <form className="flex w-full flex-none flex-col gap-4 pt-5 pb-8">
      <TextInput
        inputName="feeName"
        isRequired={true}
        inputStyle="px-[14px] py-[10px]"
        label="Fee Name"
        formData={formData}
        handleInputChange={handleInputChange}
      />

      <NumberInput
        label="Value"
        inputName="feeAmount"
        isRequired={false}
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
        inputStyle="px-3 py-2"
      />

      <RadioGroup
        title="Currency"
        groupName="currency"
        options={[
          { name: "ngn", label: "NGN" },
          { name: "usd", label: "USD" },
        ]}
        selected={formData.currency}
        onChange={handleInputChange}
      />
      <RadioGroup
        title="Fee Frequency"
        groupName="feeFrequency"
        options={[
          { name: "oneOff", label: "One Off" },
          { name: "monthly", label: "Monthly" },
        ]}
        selected={formData.feeFrequency}
        onChange={handleInputChange}
      />
      <RadioGroup
        title="Fee Impact"
        groupName="feeImpact"
        options={[
          { name: "issuance", label: "Issuance" },
          { name: "pinReissue", label: "Pin Reissue" },
        ]}
        selected={formData.feeImpact}
        onChange={handleInputChange}
      />
      <RadioGroup
        title="Account Pad"
        groupName="accountPad"
        options={[
          { name: "none", label: "None" },
          { name: "branchCodePrefix", label: "Branch Code Prefix" },
          { name: "branchCodeSuffix", label: "Branch Code Suffix" },
        ]}
        selected={formData.accountPad}
        onChange={handleInputChange}
      />

      <TextInput
        inputName="account"
        isRequired={false}
        inputStyle="px-[14px] py-[10px]"
        label="Account"
        formData={formData}
        handleInputChange={handleInputChange}
        maxLength={10}
      />
    </form>
  );
}
