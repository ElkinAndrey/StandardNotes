using Microsoft.AspNetCore.Mvc;
using StandardNotesApi.Entities;
using StandardNotesApi.Store;

namespace StandardNotesApi.Controllers
{
    [ApiController]
    [Route("api/notes")]
    public class NoteController : ControllerBase
    {
        [HttpGet("")]
        public IActionResult Get(int start = 0, int length = 10)
        {
            var notes = NoteStore.Notes.Skip(start).Take(length);
            return Ok(notes);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var note = NoteStore.Notes.FirstOrDefault(note => note.Id == id);
            if (note == null)
                return new ObjectResult("Note not found") { StatusCode = 404 };
            return Ok(note);
        }

        [HttpPost("")]
        public IActionResult Create(Note note)
        {
            var type = NoteTypeStore.Types.FirstOrDefault(type => type.Id == note.Type.Id);
            if (type == null)
                return new ObjectResult("Type not found") { StatusCode = 404 };
            Note newNote = new Note()
            {
                Title = note.Title,
                Text = note.Text,
                Type = type,
            };
            NoteStore.Notes.Add(newNote);
            return Ok(newNote);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, Note note)
        {
            var newNote = NoteStore.Notes.FirstOrDefault(type => type.Id == id);
            if (newNote == null)
                return new ObjectResult("Note not found") { StatusCode = 404 };
            var type = NoteTypeStore.Types.FirstOrDefault(type => type.Id == note.Type.Id);
            if (type == null)
                return new ObjectResult("Type not found") { StatusCode = 404 };
            newNote.Title = note.Title;
            newNote.Text = note.Text;
            newNote.Type = type;
            return Ok(newNote);
        }

        [HttpDelete("{id}")]
        public IActionResult Remove(Guid id)
        {
            var newNote = NoteStore.Notes.FirstOrDefault(type => type.Id == id);
            if (newNote == null)
                return new ObjectResult("Note not found") { StatusCode = 404 };
            NoteStore.Notes.Remove(newNote);
            return Ok(newNote);
        }
    }
}
