import Header from "./components/Header";
import Todos from "./pages/Todos";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Todos />
    </div>
  );
}