const tabs = ["All", "Active", "Completed"];

export default function TodoTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-md font-medium transition
            ${
              activeTab === tab
                ? "bg-black text-white"
                : "text-black hover:bg-gray-100"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}