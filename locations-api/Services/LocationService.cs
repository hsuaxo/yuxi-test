using Microsoft.EntityFrameworkCore;
using LocationsAPI.Models;

namespace LocationsAPI.Services
{
    public class LocationService : ILocationService
    {
        private readonly DBContext context;
        public LocationService(DBContext context)
            => this.context = context;

        public Task<Location[]> GetAvailableLocations(TimeSpan hoursFrom, TimeSpan hoursTo)
        {
            return context.Locations.AsNoTracking().ToArrayAsync();
        }

        public async Task AddLocation(Location location)
        {
            await context.Locations.AddAsync(location);
            await context.SaveChangesAsync();
        }
    }
}