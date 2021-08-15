using System;
using System.Collections.Generic;

#nullable disable

namespace fileManager.Models
{
    public partial class Employee
    {
        public int Id { get; set; }
        public string EmployeeName { get; set; }
        public decimal? Salary { get; set; }
        public DateTime? Doj { get; set; }
    }
}
