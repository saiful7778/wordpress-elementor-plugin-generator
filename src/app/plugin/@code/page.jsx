"use client";
import {
  Declear,
  Function,
  Keyword,
  Line,
  LineGap,
  LongComment,
  LongCommentLine,
  Operator,
  Scope,
  String,
} from "@/components/CodeBlock";
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
          <Tab.Panel className="con-bg overflow-auto">
            <div className="text-sm" ref={codeRef}>
              <pre>
                <code>
                  <Declear>{"<?php"}</Declear>
                  <LongComment>
                    <LongCommentLine name="Plugin Name">
                      {pluginDetails.pluginName}
                    </LongCommentLine>
                    <LongCommentLine name="Description">
                      {pluginDetails.description}
                    </LongCommentLine>
                    {pluginDetails.pluginURI && (
                      <LongCommentLine name="Plugin URI">
                        {pluginDetails.pluginURI}
                      </LongCommentLine>
                    )}
                    <LongCommentLine name="Version">
                      {pluginDetails.version}
                    </LongCommentLine>
                    <LongCommentLine name="Require At Least">
                      {pluginDetails.requireAtLeast}
                    </LongCommentLine>
                    <LongCommentLine name="Requires PHP">
                      {pluginDetails.requiresPHP}
                    </LongCommentLine>
                    <LongCommentLine name="License">
                      GPL v2 or later
                    </LongCommentLine>
                    <LongCommentLine name="License URI">
                      https://www.gnu.org/licenses/gpl-2.0.html
                    </LongCommentLine>
                    {pluginDetails.updateURI && (
                      <LongCommentLine name="Update URI">
                        {pluginDetails.updateURI}
                      </LongCommentLine>
                    )}
                    <LongCommentLine name="Author">
                      {pluginDetails.author}
                    </LongCommentLine>
                    {pluginDetails.authorURI && (
                      <LongCommentLine name="Author URI">
                        {pluginDetails.authorURI}
                      </LongCommentLine>
                    )}
                    <LongCommentLine name="Text Domain">
                      {pluginDetails.textDomain}
                    </LongCommentLine>
                    {pluginDetails.domainPath && (
                      <LongCommentLine name="Domain Path">
                        {pluginDetails.domainPath}
                      </LongCommentLine>
                    )}
                    {enableElementor && (
                      <>
                        <LongCommentLine name="Elementor tested up to">
                          {elementorDetails.elementorTested}
                        </LongCommentLine>
                        <LongCommentLine name="Elementor Pro tested up to">
                          {elementorDetails.elementorProTested}
                        </LongCommentLine>
                      </>
                    )}
                  </LongComment>
                  <Scope
                    scopeRef={
                      <Function name="if">
                        !
                        <Function name="defined">
                          <String>ABSPATH</String>
                        </Function>
                      </Function>
                    }
                  >
                    <Keyword>exit;</Keyword>
                  </Scope>
                  {enableElementor && (
                    <>
                      <Scope
                        scopeRef={
                          <>
                            <Keyword>final</Keyword>
                            <Keyword>class</Keyword>
                            <Declear>
                              {pluginDetails.pluginName.split(" ").join("")}
                            </Declear>
                          </>
                        }
                      >
                        <Line>
                          <Keyword>const</Keyword>
                          <Declear>VERSION</Declear>
                          <Operator>{`=`}</Operator>
                          <String>{pluginDetails.version}</String>
                        </Line>
                        <Line>
                          <Keyword>const</Keyword>
                          <Declear>ELEMENTOR_MINIMUM_VERSION</Declear>
                          <Operator>{`=`}</Operator>
                          <String>
                            {elementorDetails.elementorMinimumVersion}
                          </String>
                        </Line>
                        <Line>
                          <Keyword>const</Keyword>
                          <Declear>PHP_MINIMUM_VERSION</Declear>
                          <Operator>{`=`}</Operator>
                          <String>{elementorDetails.phpMinimumVersion}</String>
                        </Line>
                        <LineGap />
                        <Line>
                          <Keyword>private</Keyword>
                          <Keyword>static</Keyword>
                          <Declear>$_instance</Declear>
                          <Operator>{`=`}</Operator>
                          <Keyword>null</Keyword>
                        </Line>
                        <LineGap />
                        {/* _construct function */}
                        <Scope
                          scopeRef={
                            <Function
                              name={
                                <>
                                  <Keyword>public</Keyword>
                                  <Keyword>function</Keyword>
                                  <Declear>_construct</Declear>
                                </>
                              }
                            />
                          }
                        >
                          <Scope
                            scopeRef={
                              <Function name="if">
                                <Keyword>{`$this->`}</Keyword>
                                <Function name="is_compatible" />
                              </Function>
                            }
                          >
                            <Function name="add_action" invoke>
                              <String>elementor/init</String>,
                              <Operator>[</Operator>
                              <Keyword>$this,</Keyword>
                              <String>init_plugin</String>
                              <Operator>]</Operator>
                            </Function>
                          </Scope>
                          <Function name="add_action" invoke>
                            <String>init</String>,<Operator>[</Operator>
                            <Keyword>$this,</Keyword>
                            <String>i18n</String>
                            <Operator>]</Operator>
                          </Function>
                        </Scope>
                        {/* is_compatible function */}
                        <Scope
                          scopeRef={
                            <Function
                              name={
                                <>
                                  <Keyword>public</Keyword>
                                  <Keyword>function</Keyword>
                                  <Declear>is_compatible</Declear>
                                </>
                              }
                            />
                          }
                        ></Scope>
                        {/* i18n function */}
                        <Scope
                          scopeRef={
                            <Function
                              name={
                                <>
                                  <Keyword>public</Keyword>
                                  <Keyword>function</Keyword>
                                  <Declear>i18n</Declear>
                                </>
                              }
                            />
                          }
                        >
                          <Function name="load_plugin_textdomain" invoke>
                            <String>{pluginDetails.textDomain}</String>
                          </Function>
                        </Scope>
                        {/* init_plugin function */}
                        <Scope
                          scopeRef={
                            <Function
                              name={
                                <>
                                  <Keyword>public</Keyword>
                                  <Keyword>function</Keyword>
                                  <Declear>init_plugin</Declear>
                                </>
                              }
                            />
                          }
                        ></Scope>
                        {/* init_widgets function */}
                        <Scope
                          scopeRef={
                            <Function
                              name={
                                <>
                                  <Keyword>public</Keyword>
                                  <Keyword>function</Keyword>
                                  <Declear>init_widgets</Declear>
                                </>
                              }
                            />
                          }
                        ></Scope>
                        {/* get_instance function */}
                        <Scope
                          scopeRef={
                            <Function
                              name={
                                <>
                                  <Keyword>public</Keyword>
                                  <Keyword>static</Keyword>
                                  <Keyword>function</Keyword>
                                  <Declear>get_instance</Declear>
                                </>
                              }
                            />
                          }
                        >
                          <Scope
                            scopeRef={
                              <Function name="if">
                                <Keyword>null</Keyword>
                                <Operator>{`===`}</Operator>
                                <Keyword>self</Keyword>
                                <Operator>::</Operator>
                                <Declear>$_instance</Declear>
                              </Function>
                            }
                          >
                            <Line>
                              <Keyword>self</Keyword>
                              <Operator>::</Operator>
                              <Declear>$_instance</Declear>
                              <Operator>{`=`}</Operator>
                              <Keyword>new</Keyword>
                              <Function name="Self" />
                            </Line>
                          </Scope>
                          <Line>
                            <Keyword>return</Keyword>
                            <Keyword>self</Keyword>
                            <Operator>::</Operator>
                            <Declear>$_instance</Declear>
                          </Line>
                        </Scope>
                      </Scope>
                      <Line>
                        <Declear>
                          {pluginDetails.pluginName.split(" ").join("")}
                        </Declear>
                        <Operator>::</Operator>
                        <Function name="get_instance" />
                      </Line>
                    </>
                  )}
                  <Declear>{"?>"}</Declear>
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
