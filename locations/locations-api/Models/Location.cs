using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LocationsAPI.Models
{
    public class Location
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        [Column(TypeName = "time(0)")]
        public TimeSpan HoursFrom { get; set; }
        [Required]
        [Column(TypeName = "time(0)")]
        public TimeSpan HoursTo { get; set; }
    }
}