import type { DropdownPosition } from "@/@types";
import { DocDelimiter, Dropdown } from "@/components";

interface DropdownStory {
  position: DropdownPosition;
  autoClose: boolean;
  noAbsolute: boolean;
}

const DropdownStory: React.FC<DropdownStory> = ({
  position,
  autoClose,
  noAbsolute,
}) => {
  return (
    <DocDelimiter>
      <div className="flex items-center justify-center min-h-screen">
        <Dropdown
          position={position}
          autoClose={autoClose}
          noAbsolute={noAbsolute}
          renderTrigger={() => {
            return (
              <button className="bg-red-500 px-4 py-2 rounded hover:opacity-75">
                Open dropdown
              </button>
            );
          }}
          renderContent={(isOpen) => (
            <div
              className={`${isOpen ? "block" : "hidden"} bg-yellow-500 w-max rounded px-4 py-2`}
            >
              This is a dropdown
            </div>
          )}
        ></Dropdown>
      </div>
    </DocDelimiter>
  );
};

export default DropdownStory;
