using System.ComponentModel.DataAnnotations;

namespace StandardNotesApi.Entities
{
    public class NoteType
    {
        public Guid? Id { get; set; } = Guid.NewGuid();
        public string? Name { get; set; } = string.Empty;
    }
}
