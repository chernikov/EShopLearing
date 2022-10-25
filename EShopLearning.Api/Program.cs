using EShopLearning.Api;
using EShopLearning.Api.Profiles;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

Console.WriteLine(args);
var connectionName = args.Length > 0 ? args[0] : "Default"; 
// Add services to the container.


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var connectionString = builder.Configuration.GetConnectionString(connectionName);
builder.Services.AddDbContext<EShopLearningDbContext>(options =>
              options.UseSqlServer(connectionString)
          );
// 
builder.Services.AddScoped<IEShopLearningDbContext, EShopLearningDbContext>();
builder.Services.AddAutoMapper(typeof(UserProfile));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
