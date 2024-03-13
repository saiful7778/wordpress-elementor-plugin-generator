import { focus } from "@/lib/styles";
import cn from "@/lib/utils/cn";
import { Tab } from "@headlessui/react";

export const TabItem = ({ children }) => {
  return (
    <Tab
      className={({ selected }) =>
        cn(
          "border-r border-gray-700 px-2 py-1.5",
          focus.base,
          selected ? "bg-gray-700" : "bg-gray-800",
        )
      }
    >
      {children}
    </Tab>
  );
};

export const TabList = ({ children }) => {
  return (
    <Tab.List className="sticky top-0 z-50 flex w-full items-center border-b border-gray-700 bg-gray-800/40 text-xs backdrop-blur">
      {children}
    </Tab.List>
  );
};
