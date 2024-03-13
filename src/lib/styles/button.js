const style = {
  base: "rounded font-semibold cursor-pointer shadow duration-200 active:focus:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
  primary: "border border-gray-50 bg-gray-50 text-accent-color",
  outline:
    "border border-gray-50 text-white hover:bg-gray-50 hover:text-accent-color",
  confirm:
    "border border-green-600 bg-green-700 text-white hover:bg-green-600 disabled:hover:bg-green-700",
  cancel: "border border-red-600 bg-red-700 text-white hover:bg-red-600",
  size: {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-1 text-base",
    lg: "px-5 py-2 text-base",
  },
  shape: {
    circle: "rounded-full p-1",
    "icon-text-button": "inline-flex items-center justify-center gap-1",
    "icon-button":
      "p-2 border border-gray-700 bg-gray-800 rounded hover:bg-gray-700",
  },
};

export default style;
