import cn from "@/lib/utils/cn";

const ResizeBar = ({ target }) => {
  return (
    <div
      className={cn(
        "clear-both bg-gray-700 duration-100 hover:bg-blue-500",
        target === "col" && "h-full w-[1px] cursor-col-resize hover:w-1.5",
        target === "row" && "h-[1px] w-full cursor-row-resize hover:h-1.5",
      )}
    ></div>
  );
};

export default ResizeBar;
