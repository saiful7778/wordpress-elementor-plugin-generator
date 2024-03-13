"use client";
import SectionTitle from "@/components/SectionTitle";
import { TabItem, TabList } from "@/components/Tab";
import useStateData from "@/hooks/useStateData";
import { Tab } from "@headlessui/react";

const CodePage = () => {
  const { pluginDetails, codeRef } = useStateData();
  return (
    <>
      <SectionTitle>Code</SectionTitle>
      <Tab.Group>
        <TabList>
          <TabItem>
            {pluginDetails.pluginName
              ? pluginDetails.pluginName.toLowerCase().split(" ").join("_") +
                ".php"
              : "index.php"}
          </TabItem>
        </TabList>
        <Tab.Panels className="p-2">
          <Tab.Panel className="con-bg">
            <div ref={codeRef}>
              <div className="text-blue-500">{"<?php"}</div>
              <div className="ml-2 text-sm leading-tight text-green-600">
                {`// This details shown in wordpress dashboard`}
              </div>
              <div className="ml-2 text-sm leading-tight text-green-600">
                <div>{`/ *`}</div>
                <div>{`* Plugin Name: ${pluginDetails.pluginName}`}</div>
                <div>{`* Description: ${pluginDetails.description}`}</div>

                {pluginDetails.pluginURI && (
                  <div>{`* Plugin URI: ${pluginDetails.pluginURI}`}</div>
                )}

                <div>{`* Version: ${pluginDetails.version}`}</div>
                <div>{`* Require At Least: ${pluginDetails.requireAtLeast}`}</div>
                <div>{`* Requires PHP: ${pluginDetails.requiresPHP}`}</div>

                <div>* License: GPL v2 or later</div>
                <div>
                  * License URI: https://www.gnu.org/licenses/gpl-2.0.html
                </div>
                {pluginDetails.updateURI && (
                  <div>{`* Update URI: ${pluginDetails.updateURI}`}</div>
                )}

                <div>{`* Author: ${pluginDetails.author}`}</div>
                {pluginDetails.authorURI && (
                  <div>{`* Author URI: ${pluginDetails.authorURI}`}</div>
                )}

                <div>{`* Text Domain: ${pluginDetails.textDomain}`}</div>
                {pluginDetails.domainPath && (
                  <div>{`* Domain Path: ${pluginDetails.domainPath}`}</div>
                )}

                <div>{`* /`}</div>
              </div>
              <div className="text-blue-500">{"?>"}</div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default CodePage;
