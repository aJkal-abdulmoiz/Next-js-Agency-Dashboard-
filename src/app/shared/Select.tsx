// src/components/ui/Select.js
export const Select = ({ children, defaultValue } :any) => (
  <div className="relative">
    <select className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={defaultValue}>
      {children}
    </select>
  </div>
);

export const SelectTrigger = ({ children }:any) => <>{children}</>;

export const SelectContent = ({ children }:any) => (
  <div className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full z-10">
    {children}
  </div>
);

export const SelectItem = ({ value, children }:any) => (
  <option value={value} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    {children}
  </option>
);

export const SelectValue = ({ value }:any) => (
  <span className="block text-gray-600">{value}</span>
);
