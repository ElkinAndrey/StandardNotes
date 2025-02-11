using StandardNotesApi.JsonConverters;
using System.Text.Json.Serialization;

namespace StandardNotesApi.Entities
{
    public class Note
    {
        [JsonConverter(typeof(GuidJsonConverter))]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Title { get; set; } = string.Empty;
        public string Text { get; set; } = string.Empty;
        public NoteType? Type { get; set; } = null;
    }
}
