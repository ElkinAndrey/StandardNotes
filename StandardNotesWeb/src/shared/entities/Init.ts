import Type from "./Type";
import Note from "./Note";

class Init {
  static get type(): Type {
    return { id: "", name: "" };
  }

  static get note(): Note {
    return { id: "", title: "", text: "", type: null };
  }
}

export default Init;
