﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppForTrainee.Entities
{
    public class UserDbContext : IdentityDbContext
    {
        public UserDbContext(DbContextOptions options) : base(options)
        { 
        }
        public DbSet<User> Users { get; set; }
    }
}
