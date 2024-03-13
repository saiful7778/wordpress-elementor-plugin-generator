"use client";
import SectionTitle from "@/components/SectionTitle";
import { TabItem, TabList } from "@/components/Tab";
import useStateData from "@/hooks/useStateData";
import { Tab } from "@headlessui/react";
import Link from "next/link";

const PreviewPage = () => {
  const { pluginDetails } = useStateData();
  return (
    <>
      <SectionTitle>Preview</SectionTitle>
      <Tab.Group>
        <TabList>
          <TabItem>Woredpress dashboard</TabItem>
          <TabItem>Elementor dashboard</TabItem>
        </TabList>
        <Tab.Panels className="p-2">
          <Tab.Panel className="w-full rounded-md bg-gray-50 p-4 text-xs text-gray-900">
            <div className="border border-gray-400">
              <div className="grid grid-cols-3 divide-x divide-gray-400 border-b border-gray-400 font-semibold text-gray-600">
                <div className="p-2">Plugin</div>
                <div className="col-span-2 p-2">Description</div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-400">
                <div className="p-2">
                  <h6 className="text-sm">
                    {pluginDetails.pluginName || (
                      <span className="italic text-gray-600">Plugin name</span>
                    )}
                  </h6>
                  <div className="mt-1">
                    <span className="cursor-pointer select-none text-blue-700">
                      Activate
                    </span>
                    <span className="mx-1 inline-block h-2 w-[1px] bg-gray-700"></span>
                    <span className="cursor-pointer select-none text-red-600">
                      Delete
                    </span>
                  </div>
                </div>
                <div className="col-span-2 p-2">
                  <p>
                    {pluginDetails.description || (
                      <span className="italic text-gray-600">Description</span>
                    )}
                  </p>
                  <div className="mt-1 flex items-center gap-1 ">
                    <div>
                      Version{" "}
                      {pluginDetails.version || (
                        <span className="italic text-gray-600">Version</span>
                      )}
                    </div>
                    <span className="inline-block h-3 w-[1px] bg-gray-600"></span>
                    <div>
                      by{" "}
                      {pluginDetails.authorURI ? (
                        <Link
                          href={pluginDetails.authorURI}
                          className="text-blue-600 underline"
                          target="_blank"
                        >
                          {pluginDetails.author}
                        </Link>
                      ) : (
                        pluginDetails.author || (
                          <span className="italic text-gray-600">Author</span>
                        )
                      )}
                    </div>
                    {pluginDetails.pluginURI && (
                      <>
                        <span className="inline-block h-3 w-[1px] bg-gray-600"></span>
                        <div>
                          <Link
                            href={pluginDetails.pluginURI}
                            className="text-blue-600 underline"
                            target="_blank"
                          >
                            View details
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default PreviewPage;
