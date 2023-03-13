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

        // RETURN RequestResponse RECORD IN Get METHOD
        public record RequestResponse(int? count = null, Location[] items = null,
            string error = null);

        public LocationsController(ILocationService locationService)
            => this.locationService = locationService;

        [HttpGet]
        public async Task<RequestResponse> Get([FromQuery] TimeSpan hoursFrom,
            [FromQuery] TimeSpan hoursTo)
        {
            try
            {   // GET AVAILABLE LOCATIONS WITHIN HOURS RANGE
                var locations = await locationService.GetAvailableLocations(hoursFrom, hoursTo);
                //
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
                // ADD NEW LOCATION
                await locationService.AddLocation(location);
                //
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
