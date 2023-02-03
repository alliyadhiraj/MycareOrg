function validate() {
    var name = document.getElementById("name");
    var phone = document.getElementById("Phone");
    var email = document.getElementById("email");
    var date = document.getElementById("date");
    

    if (name.value == "" ||
        email.value == "" ||
        phone.value == "" ||
        date.value == ""
  )  {
        alert("Any Field should not be empty");
     }else if (name.value.length < 6) {
        alert("Need 6 or more chars.");
        //check if name field has 20 or less chars
      } else if (name.value.length > 20) {
        alert("Only 20 Chars allowed.");
        //success alert if validation is successful
      } else {
        alert("Form Validated Successfully.");
      }
    }

    // Doctor List

const ApiUrl = "./data.json";
const apiCreate = async (url) => {
const response = await fetch(url);
let data = await response.json();
console.log(data);
show(data);
};
apiCreate(ApiUrl);
function show(data) {
let tab = `<tr >
<th>Name</th>
<th>Specialty</th>
<th>Location</th>
<th>Exeperience</th>
</tr>`;
// Loop to access all rows
for (let r of data) {
tab += `<tr>
<td>${r.name} </td>
<td>${r.location}</td>
<td>${r.experience}</td>
<td>${r.organizations}</td>
</tr>`;
}
document.getElementById("list").innerHTML = tab;
}

// FIND HOSPITAL


        
