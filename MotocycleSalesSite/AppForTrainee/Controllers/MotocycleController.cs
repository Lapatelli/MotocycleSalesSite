using AppForTrainee.Entities;
using AppForTrainee.Entities.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
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


        public MotocycleController(UserDbContext db)
        {
            _db = db;
        }

        //[HttpGet("MotoList")]
        //[Authorize(Roles = "Admin")]
        //public IActionResult GetMotoList()
        //{
        //    return Ok();
        //}

        [HttpPost("Create")]
        [Authorize(Roles = "Admin")]
        public IActionResult Create([FromBody]Motocycle motocycle)
        {
            _db.Motocycles.Add(motocycle);
            _db.SaveChanges();

            return Ok(motocycle);
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public IActionResult Update(int id,[FromBody]Motocycle motocycle)
        {
            var existsModel = _db.Motocycles.FirstOrDefault(x => x.Id == id);

            if (existsModel == null)
            {
                return NotFound(new { errorText = $"Motocycle with id {id} not found" });
            }

            _db.Remove(existsModel);
            _db.Add(motocycle);
            _db.SaveChanges();

            return Ok(motocycle);
        }

        //[Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var existsModel = _db.Motocycles.FirstOrDefault(x => x.Id == id);

            if (existsModel == null)
            {
                return NotFound(new { errorText = $"Motocycle with id {id} not found" });
            }

            _db.Motocycles.Remove(existsModel);
            _db.SaveChanges();
            return Ok();
        }

        [Authorize]
        [HttpGet("{id}")]
        public IActionResult GetById(int id) //async toDo
        {
            var existsModel = _db.Motocycles.FirstOrDefault(x => x.Id == id);
            var result = new
            {
                existsModel.Id,
                existsModel.Name,
                existsModel.Description,
                existsModel.Year,
                existsModel.Volume,
                existsModel.Cost,
                Type=existsModel.Type.ToString()
            };

            if (existsModel == null)
            {
                return NotFound(new { errorText = $"Motocycle with id {id} not found" });
            }
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetAll() //async toDo
        {

            return Ok(_db.Motocycles.Select(x => new
            {
                x.Id,
                x.Name,
                x.Year,
                x.Volume,
                x.Cost,
                Type = x.Type.ToString()
            }));
        }
    }
}
