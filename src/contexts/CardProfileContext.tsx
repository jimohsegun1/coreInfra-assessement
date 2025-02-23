import { useState } from "react";
import { cardProfileData } from "../constants/CardProfileData";
import { CardProfileData } from "../types/card";
import { createContext } from "react";

export type CardProfileContextValues = {
  cardProfiles: CardProfileData[];
  setCardProfiles: React.Dispatch<React.SetStateAction<CardProfileData[]>>;
};

export const CardProfileContext = createContext<CardProfileContextValues>({
  cardProfiles: cardProfileData,
  setCardProfiles: () => {},
});

export default function CardProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cardProfiles, setCardProfiles] =
    useState<CardProfileData[]>(cardProfileData);

  return (
    <CardProfileContext.Provider value={{ cardProfiles, setCardProfiles }}>
      {children}
    </CardProfileContext.Provider>
  );
}
