using StandardNotesApi.Entities;

namespace StandardNotesApi.Store
{
    public static class TypeStore
    {
        public static List<NoteType> Types { get; set; } = new List<NoteType>();
    }
}
