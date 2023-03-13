using LocationsAPI.Models;
using LocationsAPI.Services;

namespace LocationsAPI.Tests
{
    public class LocationService : ILocationService
    {
        // REPLACE DB CONTEXT WITH LOCAL LIST
        private readonly List<Location> locations;

        public LocationService()
        {
            // CREATE DUMMY LOCATIONS
            locations = new List<Location>()
            {
                new Location()
                {
                    Id = 1,
                    Name = "CVS Pharmacy",
                    Address = "650 NW 27th Ave, Miami, FL 33125, United States",
                    HoursFrom = TimeSpan.Parse("08:00:00"),
                    HoursTo = TimeSpan.Parse("23:00:00"),
                },
                new Location()
                {
                    Id = 2,
                    Name = "Panera Bread",
                    Address = "650 NW 27th Ave, Miami, FL 33125, United States",
                    HoursFrom = TimeSpan.Parse("08:00:00"),
                    HoursTo = TimeSpan.Parse("23:00:00"),
                },
                new Location()
                {
                    Id = 3,
                    Name = "AMC Aventura 24",
                    Address = "650 NW 27th Ave, Miami, FL 33125, United States",
                    HoursFrom = TimeSpan.Parse("08:00:00"),
                    HoursTo = TimeSpan.Parse("23:00:00"),
                }
            };
        }

        public Task<Location[]> GetAvailableLocations(TimeSpan hoursFrom, TimeSpan hoursTo)
        {
            // WRAP IN TASK IN ORDER TO COMPLY WITH INTERFACE
            return Task.Run(() =>
                locations.Where(location => location.HoursFrom >= hoursFrom
                    && location.HoursTo <= hoursTo)
                .ToArray());
        }

        public Task AddLocation(Location location)
        {
            // WRAP IN TASK IN ORDER TO COMPLY WITH INTERFACE
            return Task.Run(() => locations.Add(location));
        }
    }
}