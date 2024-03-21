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
  const {
    pluginDetails,
    elementorDetails,
    codeRef,
    enableElementor,
    enableCompatibilityCheck,
  } = useStateData();
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
                      {/* main class */}
                      <Scope
                        scopeRef={
                          <>
                            <Keyword gap>final</Keyword>
                            <Keyword gap>class</Keyword>
                            <Declear>
                              {pluginDetails.pluginName.split(" ").join("")}
                            </Declear>
                          </>
                        }
                      >
                        <Line>
                          <Keyword gap>const</Keyword>
                          <Declear gap>VERSION</Declear>
                          <Operator>{`=`}</Operator>
                          <String>{pluginDetails.version}</String>
                        </Line>
                        {enableCompatibilityCheck && (
                          <>
                            <Line>
                              <Keyword gap>const</Keyword>
                              <Declear gap>ELEMENTOR_MINIMUM_VERSION</Declear>
                              <Operator>{`=`}</Operator>
                              <String>
                                {elementorDetails.elementorMinimumVersion}
                              </String>
                            </Line>
                            <Line>
                              <Keyword gap>const</Keyword>
                              <Declear gap>PHP_MINIMUM_VERSION</Declear>
                              <Operator>{`=`}</Operator>
                              <String>
                                {elementorDetails.phpMinimumVersion}
                              </String>
                            </Line>
                          </>
                        )}

                        <LineGap />
                        <Line>
                          <Keyword gap>private</Keyword>
                          <Keyword gap>static</Keyword>
                          <Declear>$_instance</Declear>
                          <Operator gap>{`=`}</Operator>
                          <Keyword gap>null</Keyword>
                        </Line>
                        <LineGap />
                        {/* _construct function */}
                        <Scope
                          scopeRef={
                            <Function
                              name={
                                <>
                                  <Keyword gap>public</Keyword>
                                  <Keyword gap>function</Keyword>
                                  <Declear>__construct</Declear>
                                </>
                              }
                            />
                          }
                        >
                          {enableCompatibilityCheck ? (
                            <Scope
                              scopeRef={
                                <Function name="if">
                                  <Keyword>$this</Keyword>
                                  <Operator>{`->`}</Operator>
                                  <Function name="is_compatible" />
                                </Function>
                              }
                            >
                              <Function name="add_action" invoke>
                                <String>elementor/init</String>
                                <Operator>,</Operator>
                                <Operator gap>[</Operator>
                                <Keyword gap>$this</Keyword>
                                <Operator>,</Operator>
                                <String>init_plugin</String>
                                <Operator>]</Operator>
                              </Function>
                            </Scope>
                          ) : (
                            <Function name="add_action" invoke>
                              <String>elementor/init</String>
                              <Operator>,</Operator>
                              <Operator gap>[</Operator>
                              <Keyword gap>$this</Keyword>
                              <Operator>,</Operator>
                              <String>init_plugin</String>
                              <Operator>]</Operator>
                            </Function>
                          )}
                          <Line>
                            <Function name="add_action">
                              <String>init</String>
                              <Operator>,</Operator>
                              <Operator gap>[</Operator>
                              <Keyword gap>$this</Keyword>
                              <Operator>,</Operator>
                              <String>i18n</String>
                              <Operator>]</Operator>
                            </Function>
                          </Line>
                        </Scope>
                        {/* is_compatible function */}
                        {enableCompatibilityCheck && (
                          <>
                            <Scope
                              scopeRef={
                                <Function
                                  name={
                                    <>
                                      <Keyword gap>public</Keyword>
                                      <Keyword gap>function</Keyword>
                                      <Declear>is_compatible</Declear>
                                    </>
                                  }
                                />
                              }
                            >
                              {/* check admin_notice_missing_main_plugin */}
                              <Scope
                                scopeRef={
                                  <Function name="if">
                                    !
                                    <Function name="did_action">
                                      <String>elementor/loaded</String>
                                    </Function>
                                  </Function>
                                }
                              >
                                <Function name="add_action" invoke>
                                  <String>admin_notices</String>
                                  <Operator>,</Operator>
                                  <Operator gap>[</Operator>
                                  <Keyword gap>$this</Keyword>
                                  <Operator>,</Operator>
                                  <String>
                                    admin_notice_missing_main_plugin
                                  </String>
                                  <Operator>]</Operator>
                                </Function>
                                <Line>
                                  <Keyword gap>return</Keyword>
                                  <Declear>false</Declear>
                                </Line>
                              </Scope>
                              {/* check admin_notice_minimum_elementor_version */}
                              <Scope
                                scopeRef={
                                  <Function name="if">
                                    !
                                    <Function name="version_compare">
                                      <Keyword>ELEMENTOR_VERSION</Keyword>
                                      <Operator gap>,</Operator>
                                      <Keyword>self</Keyword>
                                      <Operator>::</Operator>
                                      <Declear gap>
                                        ELEMENTOR_MINIMUM_VERSION
                                      </Declear>
                                      <Operator>,</Operator>
                                      <String>{`>=`}</String>
                                    </Function>
                                  </Function>
                                }
                              >
                                <Function name="add_action" invoke>
                                  <String>admin_notices</String>
                                  <Operator>,</Operator>
                                  <Operator>[</Operator>
                                  <Keyword>$this</Keyword>
                                  <Operator>,</Operator>
                                  <String>
                                    admin_notice_minimum_elementor_version
                                  </String>
                                  <Operator>]</Operator>
                                </Function>
                                <Line>
                                  <Keyword gap>return</Keyword>
                                  <Declear>false</Declear>
                                </Line>
                              </Scope>
                              {/* check admin_notice_minimum_php_version */}
                              <Scope
                                scopeRef={
                                  <Function name="if">
                                    <Function name="version_compare">
                                      <Keyword>PHP_VERSION</Keyword>
                                      <Operator gap>,</Operator>
                                      <Keyword>self</Keyword>
                                      <Operator>::</Operator>
                                      <Declear>PHP_MINIMUM_VERSION</Declear>
                                      <Operator>,</Operator>
                                      <String>{`<`}</String>
                                    </Function>
                                  </Function>
                                }
                              >
                                <Function name="add_action" invoke>
                                  <String>admin_notices</String>
                                  <Operator>,</Operator>
                                  <Operator>[</Operator>
                                  <Keyword>$this</Keyword>
                                  <Operator>,</Operator>
                                  <String>
                                    admin_notice_minimum_php_version
                                  </String>
                                  <Operator>]</Operator>
                                </Function>
                                <Line>
                                  <Keyword gap>return</Keyword>
                                  <Declear>false</Declear>
                                </Line>
                              </Scope>
                              <Line>
                                <Keyword gap>return</Keyword>
                                <Declear>true</Declear>
                              </Line>
                            </Scope>
                            {/* admin_notice_missing_main_plugin function */}
                            <Scope
                              scopeRef={
                                <Function
                                  name={
                                    <>
                                      <Keyword gap>public</Keyword>
                                      <Keyword gap>function</Keyword>
                                      <Declear>
                                        admin_notice_missing_main_plugin
                                      </Declear>
                                    </>
                                  }
                                />
                              }
                            >
                              <Scope
                                scopeRef={
                                  <Function name="if">
                                    <Function name="isset">
                                      <Keyword>$_GET</Keyword>
                                      <Operator>[</Operator>
                                      <String>activate</String>
                                      <Operator>]</Operator>
                                    </Function>
                                  </Function>
                                }
                              >
                                <Function name="unset" invoke>
                                  <Keyword>$_GET</Keyword>
                                  <Operator>[</Operator>
                                  <String>activate</String>
                                  <Operator>]</Operator>
                                </Function>
                              </Scope>
                              <Line>
                                <Keyword>$message</Keyword>
                                <Operator gap>{`=`}</Operator>
                                <Function name="sprintf">
                                  <Function name="esc_html__">
                                    <String
                                      single
                                    >{`"%1$s" requires "%2$s" to be installed and activated.`}</String>
                                    <Operator>,</Operator>
                                    <String>{pluginDetails.textDomain}</String>
                                  </Function>
                                  <Operator>,</Operator>
                                  <String>{`<strong>`}</String>
                                  <Operator>.</Operator>
                                  <Function name="esc_html__">
                                    <String>{pluginDetails.pluginName}</String>
                                    <Operator>,</Operator>
                                    <String>{pluginDetails.textDomain}</String>
                                  </Function>
                                  <Operator>.</Operator>
                                  <String>{`</strong>`}</String>
                                  <Operator>,</Operator>
                                  <String>{`<strong>`}</String>
                                  <Operator>.</Operator>
                                  <Function name="esc_html__">
                                    <String>Elementor</String>
                                    <Operator>,</Operator>
                                    <String>{pluginDetails.textDomain}</String>
                                  </Function>
                                  <Operator>.</Operator>
                                  <String>{`</strong>`}</String>
                                </Function>
                              </Line>
                              <Function name="printf" invoke>
                                <String
                                  single
                                >{`<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>`}</String>
                                <Operator>,</Operator>
                                <Keyword>$message</Keyword>
                              </Function>
                            </Scope>
                            {/* admin_notice_minimum_elementor_version function */}
                            <Scope
                              scopeRef={
                                <Function
                                  name={
                                    <>
                                      <Keyword gap>public</Keyword>
                                      <Keyword gap>function</Keyword>
                                      <Declear>
                                        admin_notice_minimum_elementor_version
                                      </Declear>
                                    </>
                                  }
                                />
                              }
                            >
                              <Scope
                                scopeRef={
                                  <Function name="if">
                                    <Function name="isset">
                                      <Keyword>$_GET</Keyword>
                                      <Operator>[</Operator>
                                      <String>activate</String>
                                      <Operator>]</Operator>
                                    </Function>
                                  </Function>
                                }
                              >
                                <Function name="unset" invoke>
                                  <Keyword>$_GET</Keyword>
                                  <Operator>[</Operator>
                                  <String>activate</String>
                                  <Operator>]</Operator>
                                </Function>
                              </Scope>
                              <Line>
                                <Keyword>$message</Keyword>
                                <Operator gap>{`=`}</Operator>
                                <Function name="sprintf">
                                  <Function name="esc_html__">
                                    <String
                                      single
                                    >{`"%1$s" requires "%2$s" version %3$s or greater.`}</String>
                                    <Operator>,</Operator>
                                    <String>{pluginDetails.textDomain}</String>
                                  </Function>
                                  <Operator>,</Operator>
                                  <String>{`<strong>`}</String>
                                  <Operator>.</Operator>
                                  <Function name="esc_html__">
                                    <String>{pluginDetails.pluginName}</String>
                                    <Operator>,</Operator>
                                    <String>{pluginDetails.textDomain}</String>
                                  </Function>
                                  <Operator>.</Operator>
                                  <String>{`</strong>`}</String>
                                  <Operator>,</Operator>
                                  <String>{`<strong>`}</String>
                                  <Operator>.</Operator>
                                  <Function name="esc_html__">
                                    <String>Elementor</String>
                                    <Operator>,</Operator>
                                    <String>{pluginDetails.textDomain}</String>
                                  </Function>
                                  <Operator>.</Operator>
                                  <String>{`</strong>`}</String>
                                  <Operator>,</Operator>
                                  <Keyword>self</Keyword>
                                  <Operator>::</Operator>
                                  <Declear>ELEMENTOR_MINIMUM_VERSION</Declear>
                                </Function>
                              </Line>
                              <Function name="printf" invoke>
                                <String
                                  single
                                >{`<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>`}</String>
                                <Operator>,</Operator>
                                <Keyword>$message</Keyword>
                              </Function>
                            </Scope>
                            {/* admin_notice_minimum_php_version function */}
                            <Scope
                              scopeRef={
                                <Function
                                  name={
                                    <>
                                      <Keyword gap>public</Keyword>
                                      <Keyword gap>function</Keyword>
                                      <Declear>
                                        admin_notice_minimum_php_version
                                      </Declear>
                                    </>
                                  }
                                />
                              }
                            >
                              <Scope
                                scopeRef={
                                  <Function name="if">
                                    <Function name="isset">
                                      <Keyword>$_GET</Keyword>
                                      <Operator>[</Operator>
                                      <String>activate</String>
                                      <Operator>]</Operator>
                                    </Function>
                                  </Function>
                                }
                              >
                                <Function name="unset" invoke>
                                  <Keyword>$_GET</Keyword>
                                  <Operator>[</Operator>
                                  <String>activate</String>
                                  <Operator>]</Operator>
                                </Function>
                              </Scope>
                              <Line>
                                <Keyword>$message</Keyword>
                                <Operator gap>{`=`}</Operator>
                                <Function name="sprintf">
                                  <Function name="esc_html__">
                                    <String
                                      single
                                    >{`"%1$s" requires "%2$s" version %3$s or greater.`}</String>
                                    <Operator>,</Operator>
                                    <String>{pluginDetails.textDomain}</String>
                                  </Function>
                                  <Operator>,</Operator>
                                  <String>{`<strong>`}</String>
                                  <Operator>.</Operator>
                                  <Function name="esc_html__">
                                    <String>{pluginDetails.pluginName}</String>
                                    <Operator>,</Operator>
                                    <String>{pluginDetails.textDomain}</String>
                                  </Function>
                                  <Operator>.</Operator>
                                  <String>{`</strong>`}</String>
                                  <Operator>,</Operator>
                                  <String>{`<strong>`}</String>
                                  <Operator>.</Operator>
                                  <Function name="esc_html__">
                                    <String>PHP</String>
                                    <Operator>,</Operator>
                                    <String>{pluginDetails.textDomain}</String>
                                  </Function>
                                  <Operator>.</Operator>
                                  <String>{`</strong>`}</String>
                                  <Operator>,</Operator>
                                  <Keyword>self</Keyword>
                                  <Operator>::</Operator>
                                  <Declear>PHP_MINIMUM_VERSION</Declear>
                                </Function>
                              </Line>
                              <Function name="printf" invoke>
                                <String
                                  single
                                >{`<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>`}</String>
                                <Operator>,</Operator>
                                <Keyword>$message</Keyword>
                              </Function>
                            </Scope>
                          </>
                        )}
                        {/* i18n function */}
                        <Scope
                          scopeRef={
                            <Function
                              name={
                                <>
                                  <Keyword gap>public</Keyword>
                                  <Keyword gap>function</Keyword>
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
                                  <Keyword gap>public</Keyword>
                                  <Keyword gap>function</Keyword>
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
                                  <Keyword gap>public</Keyword>
                                  <Keyword gap>function</Keyword>
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
                                  <Keyword gap>public</Keyword>
                                  <Keyword gap>static</Keyword>
                                  <Keyword gap>function</Keyword>
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
                                <Operator gap>{`===`}</Operator>
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
                              <Operator gap>{`=`}</Operator>
                              <Keyword gap>new</Keyword>
                              <Function name="Self" />
                            </Line>
                          </Scope>
                          <Line>
                            <Keyword gap>return</Keyword>
                            <Keyword>self</Keyword>
                            <Operator>::</Operator>
                            <Declear>$_instance</Declear>
                          </Line>
                        </Scope>
                      </Scope>
                      {/* call main class */}
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
