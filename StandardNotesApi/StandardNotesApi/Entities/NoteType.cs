using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using StandardNotesApi.JsonConverters;

namespace StandardNotesApi.Entities
{
    public class NoteType
    {
        [JsonConverter(typeof(GuidJsonConverter))]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string? Name { get; set; } = string.Empty;
    }
}
