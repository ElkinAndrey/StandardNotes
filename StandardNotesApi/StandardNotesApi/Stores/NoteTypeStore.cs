using StandardNotesApi.Entities;

namespace StandardNotesApi.Store
{
    public static class NoteTypeStore
    {
        public static List<NoteType> Types { get; set; } = new List<NoteType>()
        {
            new NoteType() { Id = new Guid("fae614f4-8511-4e9a-a1d1-cdbc034cd4db"), Name = "Работа" },
            new NoteType() { Id = new Guid("a52de5c4-1f49-49c7-9240-e6f86938caf2"), Name = "Покупки" },
            new NoteType() { Id = new Guid("6ba40278-2c6e-4f01-820e-3b8edf17888c"), Name = "Учеба" },
            new NoteType() { Id = new Guid("20235415-589d-4b36-adc1-db66db15a41c"), Name = "Отдых" },
        };
    }
}
