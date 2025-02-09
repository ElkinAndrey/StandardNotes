using Microsoft.AspNetCore.Mvc;

namespace StandardNotesApi.Controllers
{
    [ApiController]
    [Route("api/home")]
    public class HomeController : ControllerBase
    {
        [HttpGet()]
        public IActionResult Get()
        {
            return Ok("Hello");
        }
    }
}
