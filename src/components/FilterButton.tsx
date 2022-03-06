import { Popover, Transition } from '@headlessui/react';
import { FilterIcon } from '@heroicons/react/outline';
import { Fragment, useEffect, useState } from 'react';

interface FilterButtonProps {
  options: string[];
  cb: (selected: string[]) => void;
}

function FilterButton({ options, cb }: FilterButtonProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  useEffect(() => {
    const newFilteredOptions = options.filter((option) =>
      option.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredOptions(newFilteredOptions);
  }, [search]);

  return (
    <div>
      <Popover className="relative">
        {() => (
          <>
            <Popover.Button>
              <FilterIcon className="h-3 w-3 text-gray-500" aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-48 h-52 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative flex flex-col bg-white p-2">
                    <input
                      className="border-solid border-2 border-gray-500 mb-2"
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="flex flex-col overflow-y-scroll h-40">
                      {filteredOptions.map((option) => (
                        <button
                          type="button"
                          className={`flex flex-row hover:bg-gray-200 p-1 ${
                            selected.includes(option) ? 'bg-gray-300 hover:bg-gray-300' : ''
                          }`}
                          onClick={() => {
                            if (selected.includes(option)) {
                              setSelected(selected.filter((v) => v !== option));
                            } else {
                              setSelected([...selected, option]);
                            }
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <div className="flex flex-row justify-end mt-2">
                      <button
                        className="p-1 bg-gray-200"
                        type="button"
                        onClick={() => setSelected([])}
                      >
                        Clear
                      </button>
                      <button
                        className="p-1 ml-3 bg-gray-200"
                        type="button"
                        onClick={() => cb(selected)}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

export default FilterButton;
