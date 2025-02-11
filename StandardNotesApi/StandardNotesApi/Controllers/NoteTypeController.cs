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
        public IActionResult Get()
        {
            var types = NoteTypeStore.Types;
            return Ok(types);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var type = NoteTypeStore.Types.FirstOrDefault(type => type.Id == id);
            if (type == null)
                return new ObjectResult("Type not found") { StatusCode = 404 };
            return Ok(type);
        }

        [HttpPost("")]
        public IActionResult Create(NoteType type)
        {
            NoteType newType = new NoteType()
            {
                Name = type.Name,
            };
            NoteTypeStore.Types.Add(newType);
            return Ok(newType);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, NoteType type)
        {
            var newType = NoteTypeStore.Types.FirstOrDefault(type => type.Id == id);
            if (newType == null)
                return new ObjectResult("Type not found") { StatusCode = 404 };
            newType.Name = type.Name;
            return Ok(newType);
        }

        [HttpDelete("{id}")]
        public IActionResult Remove(Guid id)
        {
            var newType = NoteTypeStore.Types.FirstOrDefault(type => type.Id == id);
            if (newType == null)
                return new ObjectResult("Type not found") { StatusCode = 404 };
            NoteTypeStore.Types.Remove(newType);
            return Ok(newType);
        }
    }
}
