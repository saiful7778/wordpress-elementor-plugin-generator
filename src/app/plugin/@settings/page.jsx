"use client";
import Input from "@/components/utilities/Input";
import Button from "@/components/Button";
import useStateData from "@/hooks/useStateData";
import Textarea from "@/components/utilities/Textarea";
import SectionTitle from "@/components/SectionTitle";
import { Tab } from "@headlessui/react";
import Modal from "@/components/Modal";
import { useState } from "react";
import { TabItem, TabList } from "@/components/Tab";

const SettingsPage = () => {
  const { pluginDetails, handlePluginDetails, code } = useStateData();

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
          <Tab.Panel className="con-bg space-y-3">Elementor details</Tab.Panel>
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
