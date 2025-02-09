using StandardNotesApi.Entities;

namespace StandardNotesApi.Store
{
    public static class NoteStore
    {

        public static List<Note> Notes { get; set; } = new List<Note>();
    }
}
