using Microsoft.AspNetCore.Mvc;
using StandardNotesApi.Entities;
using StandardNotesApi.Store;

namespace StandardNotesApi.Controllers
{
    [ApiController]
    [Route("api/types")]
    public class NoteTypeController : ControllerBase
    {
        [HttpGet("")]
        public async Task<IActionResult> Get()
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            var types = NoteTypeStore.Types;
            return Ok(types);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            var type = NoteTypeStore.Types.FirstOrDefault(type => type.Id == id);
            if (type == null)
                return new ObjectResult("Type not found") { StatusCode = 404 };
            return Ok(type);
        }

        [HttpPost("")]
        public async Task<IActionResult> Create(NoteType type)
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            NoteType newType = new NoteType()
            {
                Name = type.Name,
            };
            NoteTypeStore.Types.Add(newType);
            return Ok(newType);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, NoteType type)
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            var newType = NoteTypeStore.Types.FirstOrDefault(type => type.Id == id);
            if (newType == null)
                return new ObjectResult("Type not found") { StatusCode = 404 };
            newType.Name = type.Name;
            return Ok(newType);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Remove(Guid id)
        {
            await Task.Delay(1000);
            Random random = new Random();
            if (random.NextDouble() < 0.1) throw new Exception();

            var newType = NoteTypeStore.Types.FirstOrDefault(type => type.Id == id);
            if (newType == null)
                return new ObjectResult("Type not found") { StatusCode = 404 };
            NoteTypeStore.Types.Remove(newType);
            return Ok(newType);
        }
    }
}
