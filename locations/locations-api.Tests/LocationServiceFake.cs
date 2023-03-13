using System;
using System.Collections;
using System.Collections.Generic;
using LocationsAPI.Models;
using LocationsAPI.Services;

namespace LocationsAPI.Tests
{
    public class LocationService : ILocationService
    {
        private readonly List<Location> locations;
        public LocationService()
        {
            locations = new List<Location>()
            {
                new Location()
                {
                    Id = 1,
                    Name = "CVS Pharmacy",
                    Address = "650 NW 27th Ave, Miami, FL 33125, United States",
                    HoursFrom = TimeSpan.Parse("08:00:00"),
                    HoursTo = TimeSpan.Parse("23:00:00"),
                }
            };
        }

        public Task<Location[]> GetAvailableLocations(TimeSpan hoursFrom, TimeSpan hoursTo)
        {
            return Task.Run(() =>
                locations.Where(location => location.HoursFrom >= hoursFrom
                    && location.HoursTo <= hoursTo)
                .ToArray());
        }

        public Task AddLocation(Location location)
        {
            return Task.Run(() => locations.Add(location));
        }
    }
}