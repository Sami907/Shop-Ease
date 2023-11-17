for(i=1; i <= 31; i++)
{
    var DynOpt = document.createElement("option")
    DynOpt.setAttribute("class","opt");
    DynOpt.setAttribute("value",i);
    DynOpt.innerHTML = i;
    var iDayId = document.getElementById("Day");
    iDayId.appendChild(DynOpt)
}

const currentYear = new Date().getFullYear();
const startYear = 2000;
const years = [];

for (let year = startYear; year <= currentYear; year++) {
  years.push(year);
}

const yearSelect = document.getElementById("Year");

years.forEach(year => {
  const option = document.createElement("option");
  option.setAttribute("class", "opt")
  option.value = year;
  option.text = year;
  yearSelect.appendChild(option);
});


function RegisterNow()
{
    var txtFirstName = document.getElementById("txtFirstName");
    if(txtFirstName.innerText == "")
    {
        txtFirstName.style.border = "1px solid red";
    }

    var txtPassword = document.getElementById("txtPassword");
    if(txtPassword.innerText == "")
    {
      txtPassword.style.border = "1px solid red";
    }

    var Day = document.getElementById("Day");
    if(Day.value == 0)
    {
      Day.style.border = "1px solid red";
    }

    var Month = document.getElementById("Month");
    if(Month.value == 0)
    {
      Month.style.border = "1px solid red";
    }

    var Year = document.getElementById("Year");
    if(Year.value == 0)
    {
      Year.style.border = "1px solid red";
    }

    var txtEmail = document.getElementById("txtEmail");
    if(txtEmail.innerText == "")
    {
      txtEmail.style.border = "1px solid red";
    }

    var txtLastName = document.getElementById("txtLastName");
    if(txtLastName.innerText == "")
    {
      txtLastName.style.border = "1px solid red";
    }

    var txtContactNo = document.getElementById("txtContactNo");
    if(txtContactNo.innerText == "")
    {
      txtContactNo.style.border = "1px solid red";
    }

    var txtEmail = document.getElementById("txtEmail");
    if(txtEmail.innerText == "")
    {
      txtEmail.style.border = "1px solid red";
    }

    var country = document.getElementById("country");
    if(country.value == 0)
    {
      country.style.border = "1px solid red";
    }

    var Gender = document.getElementById("Gender");
    if(Gender.value == 0)
    {
      Gender.style.border = "1px solid red";
    }
}

function RemoveBorder(id,IsCombo)
{
    if(IsCombo == true)
    {
        var combo = document.getElementById(id);
        if(combo.value != 0)
        {
          combo.style.border = "none";
        }
    }
    else
    {
      var field = document.getElementById(id);
      if(field.innerText == "")
      {
        field.style.border = "none";
      }
    }
}