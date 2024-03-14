import ResizeBar from "@/components/ResizeBar";

const PluginLayout = ({ settings, preview, code }) => {
  return (
    <div className="flex h-screen w-full flex-col overflow-auto lg:flex-row">
      <div className="flex w-full flex-col lg:w-3/5">
        <div className="h-full overflow-auto">{settings}</div>
      </div>
      <ResizeBar target="col" />
      <div className="flex w-full flex-col lg:w-2/5">
        <div className="h-1/2 overflow-auto">{preview}</div>
        <ResizeBar target="row" />
        <div className="h-1/2 overflow-auto">{code}</div>
      </div>
    </div>
  );
};

export default PluginLayout;
