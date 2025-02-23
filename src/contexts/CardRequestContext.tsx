import { createContext, useState } from "react";
import {
  cardRequestData,
  CardRequestData,
  CardRequestStatus,
} from "../constants/cardRequestData";

export type CardRequestContextValues = {
  cardRequests: CardRequestData[];
  updateRequest: (
    id: number,
    value: CardRequestStatus | boolean,
    name: string
  ) => void;
};

export const CardRequestContext =
  createContext<CardRequestContextValues | null>(null);

export default function CardRequestProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cardRequests, setCardRequests] =
    useState<CardRequestData[]>(cardRequestData);

  function updateRequest(
    id: number,
    value: CardRequestStatus | boolean,
    name: string
  ) {
    const updatedRequests: CardRequestData[] = cardRequests.map((request) => {
      if (request.id === id) {
        return { ...request, [name]: value };
      }
      return request;
    });
    setCardRequests(updatedRequests);
  }

  return (
    <CardRequestContext.Provider value={{ cardRequests, updateRequest }}>
      {children}
    </CardRequestContext.Provider>
  );
}
