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
    [Route("api/name")]
    public class NameController : Controller
    {

        [HttpPost]
        public IActionResult Get([FromBody] string person)
        {
            return Ok(person);
        }
    }
}
