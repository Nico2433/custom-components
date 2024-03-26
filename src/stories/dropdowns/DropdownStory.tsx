import type { DropdownPosition } from "@/@types";
import { DocDelimiter, Dropdown } from "@/components";

interface DropdownStory {
  hideChildren: boolean;
  autoClose: boolean;
  position: DropdownPosition;
}

const DropdownStory: React.FC<DropdownStory> = ({
  hideChildren,
  autoClose,
  position,
}) => {
  return (
    <DocDelimiter>
      <div className="flex items-center justify-center min-h-screen">
        <Dropdown
          hideChildren={hideChildren}
          autoClose={autoClose}
          position={position}
          renderTrigger={() => {
            return (
              <button className="bg-red-500 px-4 py-2 rounded hover:opacity-75">
                Open dropdown
              </button>
            );
          }}
        >
          <div className="bg-yellow-500 w-max rounded px-4 py-2">
            This is a dropdown
          </div>
        </Dropdown>
      </div>
    </DocDelimiter>
  );
};

export default DropdownStory;
