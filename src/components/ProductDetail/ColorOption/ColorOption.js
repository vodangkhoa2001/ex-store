import { Tab } from "@headlessui/react";

function ColorOption({ colors = [], className }) {
  return (
    <Tab.Group as="div" className={className}>
      <Tab.List>
        {colors.map((color, index) => {
          return (
            <Tab key={index} className="focus-visible:outline-none mr-2">
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */

                <div
                  className={
                    selected
                      ? `w-8 h-8 ${color} rounded-full border-gray-800 border-4`
                      : `w-8 h-8 ${color} rounded-full border-4`
                  }
                ></div>
              )}
            </Tab>
          );
        })}
      </Tab.List>
    </Tab.Group>
  );
}

export default ColorOption;
