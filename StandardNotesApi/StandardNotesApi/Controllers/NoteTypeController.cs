using Microsoft.AspNetCore.Mvc;
using StandardNotesApi.Dto;
using StandardNotesApi.Entities;
using StandardNotesApi.Store;

namespace StandardNotesApi.Controllers
{
    [ApiController]
    [Route("api/types")]
    public class NoteTypeController : ControllerBase
    {
        [HttpGet("")]
        public IActionResult Get(int start = 0, int length = 10)
        {
            var types = NoteTypeStore.Types.Skip(start).Take(length);
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
        public IActionResult Create(NoteTypeDto type)
        {
            NoteType newType = new NoteType()
            {
                Name = type.Name,
            };
            NoteTypeStore.Types.Add(newType);
            return Ok(newType);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, NoteTypeDto type)
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
