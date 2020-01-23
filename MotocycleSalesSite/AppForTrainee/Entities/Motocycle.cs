using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppForTrainee.Entities
{
    public class Motocycle
    {
        public int Id { get; set; }

        [Required]
        [MinLength(5)]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        [Range(1980, 2020)]
        public int Year { get; set; }

        [Required]
        [Range(100, 2000)]
        public int Volume { get; set; }

        public decimal Cost { get; set; }

        public MotocycleType Type { get; set; }
    }
}
