using EShopLearning.Api.Dto;
using EShopLearning.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace EShopLearning.Api.Controllers
{
    [Route("api/login")]
    public class LoginController : Controller
    {
        private readonly IEShopLearningDbContext context;
        private readonly IConfiguration configuration;

        public LoginController(IEShopLearningDbContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            var user = context.Users.SingleOrDefault(p => p.Name == loginDto.Name && p.Password == loginDto.Password);
            if (user != null)
            {
                var issuer = configuration["Jwt:Issuer"];
                var audience = configuration["Jwt:Audience"];
                var key = Encoding.UTF8.GetBytes(configuration["Jwt:Key"]);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new[]
                        {
                            new Claim("Id", user.Id.ToString()),
                            new Claim(JwtRegisteredClaimNames.Sub, user.Name),
                            new Claim(JwtRegisteredClaimNames.Email, user.Name),
                            new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
                        }),
                    Expires = DateTime.UtcNow.AddMinutes(5),
                    Issuer = issuer,
                    Audience = audience,
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),  SecurityAlgorithms.HmacSha512Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var jwtToken = tokenHandler.WriteToken(token);
                var stringToken = tokenHandler.WriteToken(token);
                return Ok(new
                {
                    token = stringToken
                });
            }
            return BadRequest();
        }
    }
}
