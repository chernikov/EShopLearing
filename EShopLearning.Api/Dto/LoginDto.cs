using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShopLearning.Api.Dto
{
    public class LoginDto
    {
        [Required]
        public string Name { get; set; }

        [DataType("password")]
        public string Password { get; set; }
    }
}
