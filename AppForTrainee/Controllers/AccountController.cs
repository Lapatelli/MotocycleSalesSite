using AppForTrainee.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AppForTrainee.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        //private readonly SignInManager<User> _signInManager;        

        public AccountController(UserManager<User> userManager)
        {
            _userManager = userManager;
            //_signInManager = signInManager;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUser([FromBody]UserRegisterModel model)
        {
            model.Role = "User";
            var user = new User()
            {
                UserName = model.UserName,
                Email = model.Email,
                FullName = model.FullName
            };

            try
            {
                var result = await _userManager.CreateAsync(user, model.Password);
                await _userManager.AddToRoleAsync(user, model.Role);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody]UserLoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);

            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                //Role for assigned user
                var role = await _userManager.GetRolesAsync(user);

                var claims = new List<Claim>
                {
                    new Claim("UserID",user.Id.ToString()),
                    new Claim("role",role.FirstOrDefault()) //ClaimTypes.Role - в JWT определяет длинную ссылку на схему, а не "role" : Admin
                };

                ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);

                var now = DateTime.UtcNow;

                var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: claimsIdentity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(),
                    SecurityAlgorithms.HmacSha256));


                var token = new JwtSecurityTokenHandler().WriteToken(jwt);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or Password is incorrect!" });
        }

        [HttpGet("UserProfile")]
        [Authorize]
        public async Task<IActionResult> GetUserProfile()
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);

            return Ok(new { user.FullName, user.Email, user.UserName });
        }
    }
}
