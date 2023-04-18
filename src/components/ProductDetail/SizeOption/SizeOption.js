import { Tab } from "@headlessui/react";

function SizeOption({ sizes = [] }) {
  return (
    <Tab.Group>
      <Tab.List>
        {sizes.map((size, index) => {
          return (
            <Tab key={index} className="focus-visible:outline-none mb-2">
              {({ selected }) => (
                <div
                  className={
                    selected
                      ? "w-10 h-10 flex items-center justify-center rounded border-2 ml-3 border-secondary"
                      : "w-10 h-10 flex items-center justify-center rounded border-2 ml-3 border-gray-300"
                  }
                >
                  <span>{size}</span>
                </div>
              )}
            </Tab>
          );
        })}
      </Tab.List>
    </Tab.Group>
  );
}

export default SizeOption;
