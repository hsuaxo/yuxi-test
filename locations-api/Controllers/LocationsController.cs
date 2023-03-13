using Microsoft.AspNetCore.Mvc;
using LocationsAPI.Models;
using LocationsAPI.Services;

namespace LocationsAPI.Controllers
{
    [ApiController]
    [Route("/")]
    public class LocationsController : ControllerBase
    {
        private readonly ILocationService locationService;

        public record RequestResponse(int? count = null, Location[] items = null,
            string error = null);

        public LocationsController(ILocationService locationService)
            => this.locationService = locationService;

        [HttpGet]
        public async Task<RequestResponse> Get([FromQuery] TimeSpan hoursFrom, [FromQuery] TimeSpan hoursTo)
        {
            try
            {
                var locations = await locationService.GetAvailableLocations(hoursFrom, hoursTo);
                return new RequestResponse(locations.Length, locations);
            }
            catch (Exception ex)
            {
                return new RequestResponse(error: ex.Message);
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
                return BadRequest(ex);
            }
        }
    }
}
