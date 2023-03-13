using LocationsAPI.Models;
using LocationsAPI.Controllers;
using LocationsAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace LocationsAPI.Tests
{
    public class LocationControllerTest
    {
        private readonly LocationsController controller;
        private readonly ILocationService service;

        public LocationControllerTest()
        {
            service = new LocationService();
            controller = new LocationsController(service);
        }

        [Fact]
        public async Task Get_WhenCalled_ReturnsRequestResponse()
        {
            var timeFrom = TimeSpan.Parse("10:00:00");
            var timeTo = TimeSpan.Parse("13:00:00");
            var response = await controller.Get(timeFrom, timeTo);

            // CONFIRM RESPONSE IS OF TYPE RequestResponse
            Assert.IsType<LocationsController.RequestResponse>(response);
        }

        [Fact]
        public async Task Post_WhenCalled_ReturnsOk()
        {
            var location = new Location()
            {
                Id = 1,
                Name = "CVS Pharmacy",
                Address = "650 NW 27th Ave, Miami, FL 33125, United States",
                HoursFrom = TimeSpan.Parse("08:00:00"),
                HoursTo = TimeSpan.Parse("23:00:00"),
            };

            var result = await controller.Post(location);

            // CONFIRM OK STATUS CODE AFTER ADDING LOCATION
            Assert.IsType<OkResult>(result);
        }
    }
}

