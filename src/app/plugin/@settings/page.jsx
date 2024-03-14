"use client";
import Input from "@/components/utilities/Input";
import Button from "@/components/Button";
import useStateData from "@/hooks/useStateData";
import Textarea from "@/components/utilities/Textarea";
import SectionTitle from "@/components/SectionTitle";
import { Switch, Tab } from "@headlessui/react";
import Modal from "@/components/Modal";
import { useState } from "react";
import { TabItem, TabList } from "@/components/Tab";
import cn from "@/lib/utils/cn";

const SettingsPage = () => {
  const {
    pluginDetails,
    handlePluginDetails,
    code,
    enableElementor,
    setEnableElementor,
    elementorDetails,
    handleElementorDetails,
  } = useStateData();

  const [modal, setModal] = useState(false);

  const handleModal = () => setModal((l) => !l);
  return (
    <>
      <SectionTitle>Settings</SectionTitle>
      <Tab.Group>
        <TabList>
          <TabItem>Plugin Details</TabItem>
          <TabItem>Elementor Details</TabItem>
        </TabList>
        <Tab.Panels className="p-2">
          <Tab.Panel className="con-bg space-y-3">
            <Input
              type="text"
              name="pluginName"
              placeholder="Plugin name"
              label="Plugin name"
              value={pluginDetails.pluginName}
              onChange={(e) => handlePluginDetails({ pluginName: e })}
              required
            />
            <Textarea
              name="description"
              placeholder="Description"
              textLimit={100}
              label="Plugin description"
              value={pluginDetails.description}
              onChange={(e) => handlePluginDetails({ description: e })}
              required
            />
            <Input
              type="text"
              name="pluginURI"
              placeholder="Plugin URI"
              label="Plugin URI"
              value={pluginDetails.pluginURI}
              onChange={(e) => handlePluginDetails({ pluginURI: e })}
            />
            <Input
              type="text"
              name="version"
              placeholder="Plugin version"
              label="Version"
              value={pluginDetails.version}
              onChange={(e) => handlePluginDetails({ version: e })}
            />
            <Input
              type="text"
              name="requireAtLeast"
              placeholder="At least version"
              label="Wordpress version (Require At Least)"
              value={pluginDetails.requireAtLeast}
              onChange={(e) => handlePluginDetails({ requireAtLeast: e })}
            />
            <Input
              type="text"
              name="requiresPHP"
              placeholder="At least version"
              label="PHP version (Requires PHP)"
              value={pluginDetails.requiresPHP}
              onChange={(e) => handlePluginDetails({ requiresPHP: e })}
            />
            <Input
              type="text"
              name="updateURI"
              placeholder="Update URI"
              label="Update URI"
              value={pluginDetails.updateURI}
              onChange={(e) => handlePluginDetails({ updateURI: e })}
            />
            <Input
              type="text"
              name="author"
              placeholder="Author Full name"
              label="Author name"
              value={pluginDetails.author}
              onChange={(e) => handlePluginDetails({ author: e })}
              required
            />
            <Input
              type="text"
              name="authorURI"
              placeholder="Author URI"
              label="Author URI"
              value={pluginDetails.authorURI}
              onChange={(e) => handlePluginDetails({ authorURI: e })}
            />
            <Input
              type="text"
              name="textDomain"
              placeholder="Text Domain"
              label="Text Domain"
              value={pluginDetails.textDomain}
              onChange={(e) => handlePluginDetails({ textDomain: e })}
              required
            />
            <Input
              type="text"
              name="domainPath"
              placeholder="Domain path"
              label="Domain path"
              value={pluginDetails.domainPath}
              onChange={(e) => handlePluginDetails({ domainPath: e })}
            />
            <Button onClick={handleModal} variant="confirm">
              Submit
            </Button>
          </Tab.Panel>
          <Tab.Panel className="con-bg space-y-3">
            <div>
              <div className="mb-1 cursor-pointer text-xs font-medium leading-tight">
                Enable elementor
              </div>
              <Switch
                checked={enableElementor}
                onChange={setEnableElementor}
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full border",
                  enableElementor
                    ? "border-blue-500 bg-blue-600"
                    : "border-gray-600 bg-gray-700",
                )}
              >
                <span className="sr-only">Enable elementor</span>
                <span
                  className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-white transition",
                    enableElementor ? "translate-x-6" : "translate-x-1",
                  )}
                />
              </Switch>
            </div>
            {enableElementor && (
              <>
                <Input
                  type="text"
                  name="elementorMinimumVersion"
                  placeholder="Elementor Minimum Version"
                  label="Elementor Minimum Version"
                  value={elementorDetails.elementorMinimumVersion}
                  onChange={(e) =>
                    handleElementorDetails({ elementorMinimumVersion: e })
                  }
                  required
                />
                <Input
                  type="text"
                  name="elementorTested"
                  placeholder="Elementor Tested up to"
                  label="Elementor Tested up to"
                  value={elementorDetails.elementorTested}
                  onChange={(e) =>
                    handleElementorDetails({ elementorTested: e })
                  }
                />
                <Input
                  type="text"
                  name="elementorProTested"
                  placeholder="Elementor Pro Tested up to"
                  label="Elementor Pro Tested up to"
                  value={elementorDetails.elementorProTested}
                  onChange={(e) =>
                    handleElementorDetails({ elementorProTested: e })
                  }
                />

                <Input
                  type="text"
                  name="phpMinimumVersion"
                  placeholder="PHP Minimum Version"
                  label="PHP Minimum Version"
                  value={elementorDetails.phpMinimumVersion}
                  onChange={(e) =>
                    handleElementorDetails({ phpMinimumVersion: e })
                  }
                />
              </>
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {code && (
        <Modal open={modal} close={handleModal}>
          <pre>
            <code>{code.innerText}</code>
          </pre>
        </Modal>
      )}
    </>
  );
};

export default SettingsPage;
