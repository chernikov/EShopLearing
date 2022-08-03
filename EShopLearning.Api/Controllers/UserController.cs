using AutoMapper;
using EShopLearning.Api.Dto;
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

    }
}
