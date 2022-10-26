using EShopLearning.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace EShopLearning.Model
{
    public interface IEShopLearningDbContext
    {
        DbSet<User> Users { get; set; }

        int SaveChanges();
    }
}