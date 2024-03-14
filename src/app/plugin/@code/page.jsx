"use client";
import SectionTitle from "@/components/SectionTitle";
import { TabItem, TabList } from "@/components/Tab";
import useStateData from "@/hooks/useStateData";
import { Tab } from "@headlessui/react";

const CodePage = () => {
  const { pluginDetails, elementorDetails, codeRef, enableElementor } =
    useStateData();

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
            <div className="text-sm" ref={codeRef}>
              <pre>
                <code>
                  <div className="text-blue-500">{"<?php"}</div>
                  <div className="ml-2 leading-tight text-green-600">
                    {`// This details shown in wordpress dashboard`}
                  </div>
                  <div className="ml-2 leading-tight text-green-600">
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
                  <div className="text-amber-600">
                    if (!defined({" "}
                    <span className="text-amber-300">{`"ABSPATH"`}</span> )){" "}
                    {`{`}
                  </div>
                  <div className="text-amber-600">
                    {" "}
                    exit<span className="text-gray-50">;</span>
                  </div>
                  <div className="text-amber-600">{`}`}</div>
                  {enableElementor && (
                    <>
                      <div className="text-blue-500">
                        final class{" "}
                        <span className="text-gray-50">
                          {pluginDetails.pluginName.split(" ").join("")}
                        </span>
                        {` {`}
                      </div>
                      <div className="ml-2">
                        <div>
                          <span className="text-amber-600">const </span>
                          <span className="text-blue-500">VERSION = </span>
                          <span className="text-amber-300">{`'${pluginDetails.version}'`}</span>
                          <span>;</span>
                        </div>
                        <div>
                          <span className="text-amber-600">const </span>
                          <span className="text-blue-500">
                            ELEMENTOR_MINIMUM_VERSION ={" "}
                          </span>
                          <span className="text-amber-300">{`'${elementorDetails.elementorMinimumVersion}'`}</span>
                          <span>;</span>
                        </div>
                        <div>
                          <span className="text-amber-600">const </span>
                          <span className="text-blue-500">
                            PHP_MINIMUM_VERSION ={" "}
                          </span>
                          <span className="text-amber-300">{`'${elementorDetails.phpMinimumVersion}'`}</span>
                          <span>;</span>
                        </div>
                        <div>
                          <span className="text-amber-600">
                            private static{" "}
                          </span>
                          <span className="text-blue-500">
                            $_instance = null
                          </span>
                          <span>;</span>
                        </div>
                        <div className="mt-4 text-amber-600">
                          public function _construct() {`{`}
                          <div className="ml-4">
                            <div>
                              <span className="text-blue-500">
                                add_action({" "}
                              </span>
                              <span className="text-amber-300">{`'init', `}</span>
                              <span className="text-blue-500">[ $this, </span>
                              <span className="text-amber-300">{`'i18n' `}</span>
                              <span className="text-blue-500">]</span>
                              <span className="text-blue-500"> );</span>
                            </div>
                            <div>
                              <span className="text-blue-500">
                                add_action({" "}
                              </span>
                              <span className="text-amber-300">{`'plugin_loaded', `}</span>
                              <span className="text-blue-500">[ $this, </span>
                              <span className="text-amber-300">{`'init_plugin' `}</span>
                              <span className="text-blue-500">]</span>
                              <span className="text-blue-500"> );</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-amber-600">{`}`}</div>
                        <div className="mt-4 text-amber-600">
                          public function i18n() {`{`}
                        </div>
                        <div className="ml-4 text-blue-500">
                          load_plugin_textdomain(
                          {`'${pluginDetails.textDomain}'`});
                        </div>
                        <div className="mt-4 text-amber-600">{`}`}</div>
                        <div className="mt-4 text-amber-600">
                          public function init_plugin() {`{`}
                        </div>
                        <div className="mt-4 text-amber-600">{`}`}</div>
                        <div className="mt-4 text-amber-600">
                          public function init_widgets() {`{`}
                        </div>
                        <div className="mt-4 text-amber-600">{`}`}</div>
                        <div className="mt-4 text-amber-600">
                          public static function get_instance() {`{`}
                        </div>
                        <div className="ml-4">
                          <div>
                            <span className="text-blue-500">if</span>{" "}
                            <span className="text-amber-600">(</span>{" "}
                            <span className="text-gray-500">null</span> ===
                            <span className="text-amber-500"> self</span>::
                            <span className="text-blue-500">$_instance</span>
                            <span className="text-amber-600">)</span>{" "}
                            <span className="text-blue-500">{`{`}</span>
                          </div>
                          <div className="ml-4">
                            <span className="text-amber-500">self</span>::
                            <span className="text-blue-500">$_instance</span> =
                            <span className="text-amber-500"> new Self()</span>;
                          </div>
                          <div className="text-blue-500">{`}`}</div>
                        </div>
                        <div className="ml-4">
                          <span className="text-blue-500">return</span>
                          <span className="text-amber-500"> self</span>::
                          <span className="text-blue-500">$_instance</span>;
                        </div>
                        <div className="text-amber-600">{`}`}</div>
                      </div>
                      <div className="text-blue-500">{`}`}</div>

                      <div className="my-4 text-amber-600">
                        {pluginDetails.pluginName.split(" ").join("")}
                        ::<span className="text-blue-500">get_instance()</span>;
                      </div>
                    </>
                  )}
                  <div className="text-blue-500">{"?>"}</div>
                </code>
              </pre>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default CodePage;
