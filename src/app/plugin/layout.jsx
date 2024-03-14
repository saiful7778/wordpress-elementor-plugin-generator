import ResizeBar from "@/components/ResizeBar";

const PluginLayout = ({ settings, preview, code }) => {
  return (
    <div className="flex h-screen w-full flex-col overflow-auto">
      <div className="flex h-3/5 w-full">
        <div className="w-3/5 overflow-auto">{settings}</div>
        <ResizeBar target="col" />
        <div className="w-2/5 overflow-auto">{preview}</div>
      </div>
      <ResizeBar target="row" />
      <div className="h-2/5 w-full overflow-auto">{code}</div>
    </div>
  );
};

export default PluginLayout;
