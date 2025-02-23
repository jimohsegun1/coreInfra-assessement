interface CardProfileData {
  id: string;
  cardName: string;
  currency: string;
  expiration: number;
  binPrefix: string;
  dateCreated: string;
  cardScheme: string;
  description: string;
  branchBlacklist: string;
}

type ProfileFormData = {
  id: string | null;
  cardName: string;
  cardScheme: string;
  description: string;
  branchBlacklist: string;
  currency: string;
  expiration: number | 0;
  binPrefix: string;
};

export type { CardProfileData, ProfileFormData };
