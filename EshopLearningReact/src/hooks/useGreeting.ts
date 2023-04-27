import {useState} from "react";
import {StringOrNull} from "../types";

export const useGreeting = () => {
  const [name, setName] = useState<StringOrNull>("");
  const onChangeName = (value: string) => {
    setName(value);
  };

  const getName = () => {
    return name;
  }

  return { getName, onChangeName };
};
