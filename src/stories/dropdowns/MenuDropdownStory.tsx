import { DocDelimiter } from "@/components";
import MenuDropdown from "@/components/client/dropdowns/MenuDropdown";

interface MenuDropdownStory {
  hideChildren: boolean;
  autoClose: boolean;
}

const MenuDropdownStory: React.FC<MenuDropdownStory> = ({
  hideChildren,
  autoClose,
}) => {
  return (
    <DocDelimiter>
      <div className="flex items-center justify-center min-h-screen">
        <MenuDropdown
          hideChildren={hideChildren}
          autoClose={autoClose}
          renderTrigger={() => <button>Test</button>}
          renderMenu={(setOpen) => (
            <div className="h-screen w-1/4 bg-red-500 left-0 top-0">
              <button onClick={() => setOpen(false)}>Close</button>
              <p className="mt-5">Menu</p>
            </div>
          )}
        />
      </div>
    </DocDelimiter>
  );
};

export default MenuDropdownStory;
