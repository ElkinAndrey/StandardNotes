using StandardNotesApi.Entities;

namespace StandardNotesApi.Store
{
    public static class NoteTypeStore
    {
        public static List<NoteType> Types { get; set; } = new List<NoteType>();
    }
}
