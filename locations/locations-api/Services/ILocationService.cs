using LocationsAPI.Models;

namespace LocationsAPI.Services
{
    public interface ILocationService
    {
        Task<Location[]> GetAvailableLocations(TimeSpan hoursFrom, TimeSpan hoursTo);
        Task AddLocation(Location location);
    }
}