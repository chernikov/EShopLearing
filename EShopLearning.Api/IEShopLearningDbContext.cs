using EShopLearning.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace EShopLearning.Api
{
    public interface IEShopLearningDbContext
    {
        DbSet<User> Users { get; set; }

        int SaveChanges();
    }
}