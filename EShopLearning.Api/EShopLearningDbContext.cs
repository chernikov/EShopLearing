using EShopLearning.Api.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShopLearning.Api
{
    public class EShopLearningDbContext : DbContext, IEShopLearningDbContext
    {
        public EShopLearningDbContext(DbContextOptions options) : base(options)
        {

        }


        public DbSet<User> Users { get; set; }
    }
}
