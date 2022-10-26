using AutoMapper;
using EShopLearning.Api.Dto;
using EShopLearning.Model.Entities;

namespace EShopLearning.Api.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDto>().ReverseMap();
        }
    }
}
