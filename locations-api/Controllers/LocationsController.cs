using Microsoft.AspNetCore.Mvc;
using LocationsAPI.Models;
using LocationsAPI.Services;

namespace LocationsAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationsController : ControllerBase
    {
        private readonly ILocationService locationService;

        public LocationsController(ILocationService locationService)
            => this.locationService = locationService;

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var hoursFrom = TimeSpan.Parse("00:00:00");
                var hoursTo = TimeSpan.Parse("14:00:00");
                var locations = await locationService.GetAvailableLocations(hoursFrom, hoursTo);
                return Ok(locations);
            }
            catch (Exception ex)
            {
                return BadRequest("AN ERROR HAS OCURRED");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Location location)
        {
            try
            {
                await locationService.AddLocation(location);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest("AN ERROR HAS OCURRED");
            }
        }
    }
}