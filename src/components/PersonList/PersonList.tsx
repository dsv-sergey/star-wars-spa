import React from "react";
import { PersonCard } from "../";
import { TPersonListProps } from "types";

export const PersonList = ({ persons }: TPersonListProps) => {
    return (<>{ persons?.map((person) => (<PersonCard key={ person.name } { ...person } />)) }</>);
};