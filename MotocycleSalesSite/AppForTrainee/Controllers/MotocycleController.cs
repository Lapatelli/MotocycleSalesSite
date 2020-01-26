using AppForTrainee.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppForTrainee.Controllers
{
    [Route("api/motocycle")]
    public class MotocycleController : ControllerBase
    {
        private readonly UserDbContext _db;
        //private readonly SignInManager<User> _signInManager;        

        public MotocycleController(UserDbContext db)
        {
            _db = db;
            //_signInManager = signInManager;
        }

        [HttpGet("MotoList")]
        [Authorize(Roles = "Admin")]
        public IActionResult GetMotoList()
        {
            return Ok();
        }

        //public IActionResult Create(Motocycle motocycle)
        //{
        //    motocycle.Id = MotocycleStore.Data.Count + 1;
        //    MotocycleStore.Data.Add(motocycle);
        //    return Ok(motocycle);
        //}

        [Authorize(Roles = "admin")]
        [HttpPut]
        public IActionResult Update(Motocycle motocycle)
        {
            var existsModel = MotocycleStore.Data.FirstOrDefault(x => x.Id == motocycle.Id);

            if (existsModel == null)
            {
                return NotFound(new { errorText = $"Motocycle with id {motocycle.Id} not found" });
            }

            MotocycleStore.Data.Remove(existsModel);
            MotocycleStore.Data.Add(motocycle);

            return Ok(motocycle);
        }

        [Authorize(Roles = "admin")]
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var existsModel = MotocycleStore.Data.FirstOrDefault(x => x.Id == id);

            if (existsModel == null)
            {
                return NotFound(new { errorText = $"Motocycle with id {id} not found" });
            }

            MotocycleStore.Data.Remove(existsModel);
            return Ok();
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var existsModel = MotocycleStore.Data.FirstOrDefault(x => x.Id == id);
            if (existsModel == null)
            {
                return NotFound(new { errorText = $"Motocycle with id {id} not found" });
            }
            return Ok(existsModel);
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_db.Motocycles.Select(x => new
            {
                Name = x.Name,
                Year = x.Year,
                Volume = x.Volume,
                Cost = x.Cost,
                Type = x.Type.ToString()
            }));
        }
    }
}
