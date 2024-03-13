import { StateContext } from "@/context/StateContext";
import { useContext } from "react";

export default function useStateData() {
  return useContext(StateContext);
}
