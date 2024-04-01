import { DocDelimiter, MenuDropdown } from "@/components";

interface MenuDropdownStory {
  autoClose: boolean;
}

const MenuDropdownStory: React.FC<MenuDropdownStory> = ({ autoClose }) => {
  return (
    <DocDelimiter>
      <div className="flex items-center justify-center min-h-screen">
        <MenuDropdown
          autoClose={autoClose}
          renderTrigger={() => <button>Test</button>}
          renderContent={(isOpen, setIsOpen) => (
            <div
              className={`${isOpen ? "block" : "hidden"} h-screen w-1/4 bg-red-500 left-0 top-0`}
            >
              <button onClick={() => setIsOpen(false)}>Close</button>
              <p className="mt-5">Menu</p>
            </div>
          )}
        />
      </div>
    </DocDelimiter>
  );
};

export default MenuDropdownStory;
