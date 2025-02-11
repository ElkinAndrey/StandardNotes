import { NotesPage } from "@/pages/note";
import { TypesPage } from "@/pages/type";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/types" element={<TypesPage />} />
    </Routes>
  );
};

export default AppRouter;
