using AutoMapper;
using EShopLearning.Api.Dto;
using EShopLearning.Api.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShopLearning.Api.Controllers
{
    [Route("api/users")]
    public class UserController : Controller
    {
        private readonly IEShopLearningDbContext context;
        private readonly IMapper mapper;

        public UserController(IEShopLearningDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var list = context.Users.ToList();

            var result = mapper.Map<List<UserDto>>(list);

            return Ok(result); 
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            if (id == 0)
            {
                return Ok(new UserDto());
            }
            var entity = context.Users.FirstOrDefault(p => p.Id == id);
            if (entity == null)
            {
                return NotFound();
            }
            var result = mapper.Map<UserDto>(entity);
            return Ok(result);
        }

        [HttpPost]
        public IActionResult Post([FromBody] UserDto user)
        {
            var entity = mapper.Map<User>(user);

            context.Users.Add(entity);

            context.SaveChanges();

            var newUser = mapper.Map<UserDto>(entity);

            return Ok(newUser);
        }

        [HttpPut]
        public IActionResult Put([FromBody] UserDto user)
        {

            var entity = context.Users.FirstOrDefault(p => p.Id == user.Id);
            entity.Name = user.Name;
            context.SaveChanges();

            var newUser = mapper.Map<UserDto>(entity);

            return Ok(newUser);
        }


        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var entity = context.Users.FirstOrDefault(p => p.Id == id);
            if (entity == null)
            {
                return Ok();
            }
            context.Users.Remove(entity);
            context.SaveChanges();
            return Ok();
        }
    }
}
