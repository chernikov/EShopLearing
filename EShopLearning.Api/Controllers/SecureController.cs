using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShopLearning.Api.Controllers
{
    [Authorize]
    [Route("api/secure")]
    public class SecureController : Controller
    {

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Secure Information");
        }
    }
}
