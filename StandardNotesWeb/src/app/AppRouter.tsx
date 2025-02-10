import { NotesPage } from "@/pages/note";
import { TypesPage } from "@/pages/type";
import { Link, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/types" element={<TypesPage />} />
    </Routes>
  );
};

export default AppRouter;
