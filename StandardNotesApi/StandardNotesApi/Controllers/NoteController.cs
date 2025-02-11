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
        public async Task<IActionResult> Get()
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            var notes = NoteStore.Notes;
            return Ok(notes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            var note = NoteStore.Notes.FirstOrDefault(note => note.Id == id);
            if (note == null)
                return new ObjectResult("Note not found") { StatusCode = 404 };
            return Ok(note);
        }

        [HttpPost("")]
        public async Task<IActionResult> Create(Note note)
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            var type = NoteTypeStore.Types.FirstOrDefault(type => (note.Type?.Id ?? Guid.Empty) == type.Id);
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
        public async Task<IActionResult> Update(Guid id, Note note)
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            var newNote = NoteStore.Notes.FirstOrDefault(type => type.Id == id);
            if (newNote == null)
                return new ObjectResult("Note not found") { StatusCode = 404 };
            var type = NoteTypeStore.Types.FirstOrDefault(type => (note.Type?.Id ?? Guid.Empty) == type.Id);
            newNote.Title = note.Title;
            newNote.Text = note.Text;
            newNote.Type = type;
            return Ok(newNote);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(Guid id)
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            var newNote = NoteStore.Notes.FirstOrDefault(type => type.Id == id);
            if (newNote == null)
                return new ObjectResult("Note not found") { StatusCode = 404 };
            NoteStore.Notes.Remove(newNote);
            return Ok(newNote);
        }
    }
}
