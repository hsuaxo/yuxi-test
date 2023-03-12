using Microsoft.EntityFrameworkCore;
using LocationsAPI.Models;

namespace LocationsAPI
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
        }

        public DbSet<Location> Locations { get; set; }
    }
}