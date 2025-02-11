import Type from "./Type";

interface Note {
  id: string;
  title: string;
  text: string;
  type?: Type | null;
}

export default Note;
