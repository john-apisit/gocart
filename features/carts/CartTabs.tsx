"use client";

export type TabId = "cart" | "address" | "payment";
const tabs: {
  id: TabId;
  title: string;
}[] = [
  {
    id: "cart",
    title: "Shoping Cart",
  },

  {
    id: "address",
    title: "Shipping Address",
  },
  {
    id: "payment",
    title: "Payment Method",
  },
];

const CartTabs = ({
  onChange,
  currentTab,
}: {
  currentTab: TabId;
  onChange: (tab: TabId) => void;
}) => {
  return (
    <div className="grid grid-cols-3 gap-8 w-fit">
      {tabs.map((t, index) => (
        <div
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`${
            currentTab === t.id
              ? "border-b-2 border-gray-800"
              : "border-b-2 border-gray-300"
          } pb-4 flex items-center gap-2 cursor-pointer transition-all duration-300`}
        >
          <div
            className={`${
              currentTab === t.id
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-white"
            } flex items-center justify-center rounded-full w-8 h-8`}
          >
            <p>{index + 1}</p>
          </div>
          <p
            className={`${
              currentTab === t.id ? "text-gray-800" : "text-gray-300"
            }`}
          >
            {t.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartTabs;
