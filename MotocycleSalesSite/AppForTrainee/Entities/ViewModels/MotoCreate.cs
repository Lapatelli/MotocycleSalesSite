using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppForTrainee.Entities.ViewModels
{
    public class MotoCreate
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public int Year { get; set; }

        public int Volume { get; set; }

        public int Cost { get; set; }

        public int Type { get; set; }
    }
}
