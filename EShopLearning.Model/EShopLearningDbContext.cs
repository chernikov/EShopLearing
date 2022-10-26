using EShopLearning.Model.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EShopLearning.Model
{
    public class EShopLearningDbContext : DbContext, IEShopLearningDbContext
    {
        public EShopLearningDbContext(DbContextOptions options) : base(options)
        {

        }


        public DbSet<User> Users { get; set; }
    }
}
