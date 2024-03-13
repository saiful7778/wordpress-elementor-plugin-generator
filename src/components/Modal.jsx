"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "./Button";

const Modal = ({ open, title, close, children }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[100] flex h-screen w-full items-center justify-center bg-gray-900/70 text-white backdrop-blur-sm"
        onClose={close}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="relative max-h-96 w-full max-w-xl overflow-auto rounded border border-gray-700 bg-gray-800/50 p-3 shadow backdrop-blur-sm">
            <Button
              className="float-right"
              onClick={close}
              variant="cancel"
              shape="circle"
            >
              <RxCross2 />
            </Button>
            {title && (
              <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
            )}
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
