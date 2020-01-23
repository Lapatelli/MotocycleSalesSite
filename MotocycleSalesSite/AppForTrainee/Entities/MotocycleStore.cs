using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppForTrainee.Entities
{
    public static class MotocycleStore
    {
        public static List<Motocycle> Data { get; } =  new List<Motocycle>
        {
            new Motocycle 
            {
                Id = 1,
                Name = "BAJAJ Pulsar 200 NS",
                Description = MotocycleDescriptions.Bajaj2019,
                Year = 2019,
                Volume = 200,
                Cost = 6250,
                Type = MotocycleType.Street
            },
            new Motocycle
            {
                Id = 2,
                Name = "Kawasaki Z 650",
                Description = MotocycleDescriptions.Kawa650_2017,
                Year = 2017,
                Volume = 650,
                Cost = 13374,
                Type = MotocycleType.Street
            },
            new Motocycle
            {
                Id = 3,
                Name = "Kawasaki ER F",
                Description = MotocycleDescriptions.Kawa650_2012,
                Year = 2012,
                Volume = 650,
                Cost = 9234,
                Type = MotocycleType.Street
            },


            new Motocycle
            {
                Id = 4,
                Name = "Suzuki GSX-R",
                Description = MotocycleDescriptions.SuzukiGSXR_2003,
                Year = 2003,
                Volume = 1000,
                Cost = 8421,
                Type = MotocycleType.Sport
            },
            new Motocycle
            {
                Id = 5,
                Name = "Honda CBR",
                Description = MotocycleDescriptions.HondaCBR_2008,
                Year = 2008,
                Volume = 1000,
                Cost = 14435,
                Type = MotocycleType.Sport
            },
            new Motocycle
            {
                Id = 6,
                Name = "Yamaha YZF R1",
                Description = MotocycleDescriptions.YamahaYZFR1_2011,
                Year = 2011,
                Volume = 1000,
                Cost = 15921,
                Type = MotocycleType.Sport
            },
        };

    }
}
