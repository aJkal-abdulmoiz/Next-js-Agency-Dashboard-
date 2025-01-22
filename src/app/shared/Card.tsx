
export const Card = ({ children }:any ) => (
  <div className="border border-gray-300 bg-white rounded-lg overflow-hidden w-full">{children}</div>
);

export const CardContent = ({ children } :any) => (
  <div className="p-4">{children}</div>
);
