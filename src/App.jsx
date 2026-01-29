import Header from "./components/Header";
import Todos from "./pages/Todos";

export default function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 overflow-hidden">
      <Header />

      {/* Main content */}
      <main className="h-[calc(100vh-96px)] overflow-hidden">
        <Todos />
      </main>
    </div>
  );
}