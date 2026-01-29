const tabs = ["All", "Active", "Completed"];

export default function TodoTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-4 mb-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-semibold transition border border-black
              ${
                isActive
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-gray-900"
              }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}