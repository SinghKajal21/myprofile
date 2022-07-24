import React, {useState}from 'react'
import './p.css'

export default function Header
 ()  {
  const[user,setUser]= useState({
    FirstName:"",LastName:"",Email:"",Contact:"",Gender:"",Birthday:"",Address:"",Nationality:"",State:"",
    city:"",Zip:"",Skills:"",PastAssignment:"",PresentAssignment:""
  });
  let name, value;
  const handleInputs =(e) =>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  }
  return (
    <div><nav classnamename="navbar navbar-expand-lg bg-light">
    <div classnamename="container-fluid">
    
      <div classnamename="collapse navbar-collapse" id="navbarSupportedContent">
        <ul classnamename="navbar-nav me-auto mb-2 mb-lg-0">
          <li classnamename="nav-item">
      <h1>Profile</h1>

          </li>
         
          <form className="col">
  <div className="col-md-4">
    <label for="inputFirstName" className="form-label">First Name</label>
    <input type="First Name" name ="FirstName"className="form-control" id="inputFirstName" 
    value={user.FirstName}
    onChange={handleInputs}
    />

  </div>
  <div className="col-md-4">
    <label for="inputLastName" className="form-label">Last Name</label>
    <input type="Last Name"  name ="LastName"className="form-control" id="inputLastName"
    value={user.LastName}
    onChange={handleInputs}/>
  </div>
 
  <div className="col-md-4">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="Email" name ="Email"className="form-control" id="inputEmail" 
    value={user.Email}
    onChange={handleInputs}
    placeholder='Xyz@gmail.com'/>
  </div>
  <div className="col-md-4">
    <label for="inputContact" className="form-label">Contact</label>
    <input type="Contact" name ="Contact"className="form-control" id="inputContact" 
    value={user.Contact}
    onChange={handleInputs}
    placeholder='94787**'/>
  </div>
  
  <div className="row g-3">
  <div className="col-md-4">
    <label for="inputGender" className="form-label">Gender</label>
    <select id="inputGender" name="Gender" className="form-select"
     value={user.Gender}
     onChange={handleInputs}>
      <option selected>Select</option>
      <option>Male</option>
      <option>Female</option>
      <option>Others</option>
    </select>
    <div className="col-md-4">
  
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="Birthday" ClassName =" "value={user.Birthday}
    onChange={handleInputs}/>
 



  </div>
  </div>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" name ="Address"className="form-control" id="inputAddress" placeholder="1234 Main St"
    value={user.Address}
    onChange={handleInputs}/>
  </div>
  <div className="col-md-4">
    <label for="inputNationality" className="form-label">Nationality</label>
    <select id="inputNationality"  name="Nationality"className="form-select"
     value={user.Nationality}
     onChange={handleInputs}>
    <option selected>Select</option>
              
               < option value="India">India</option>
                <option value="Nepal">Nepal</option>
                <option value="China">China</option>
               <option value="France">France</option>
                <option value="New Zealand">New Zealand</option>
                    <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
               
            </select>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" name="State" className="form-select"
     value={user.State}
     onChange={handleInputs}>
      <option selected>Select</option>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" name ="City" className="form-control" id="inputCity" placeholder='Example=Dehradun'
    value={user.City}
    onChange={handleInputs}/>
  </div>
  <div className="col-md-6">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" name ="Zip"className="form-control" id="inputZip" placeholder='ex-844101'
    value={user.Zip}
    onChange={handleInputs}/>
  </div>
  
  <label for="inputZip" className="form-label">Skills</label>
<div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" 
  aria-expanded="false">
    Select
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a classnamename="dropdown-item" href="#"><div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox"  aria-label="Checkbox for following text input" />
    <label for="inputSkills" className="form-label">C programming</label>
  </div>
</div></a></li>
<li><a class="dropdown-item" href="#"><div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label for="inputSkills" className="form-label">C++</label>
  </div>
</div></a></li>
<li><a class="dropdown-item" href="#"><div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label for="inputSkills" className="form-label">C#</label>
  </div>
</div></a></li>
<li><a class="dropdown-item" href="#"><div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label for="inputSkills" className="form-label">Java</label>
  </div>
</div></a></li>
<li><a class="dropdown-item" href="#"><div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label for="inputSkills" className="form-label">Python</label>
  </div>
</div></a></li>
<li><a class="dropdown-item" href="#"><div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label for="inputSkills" className="form-label">Cloud computing</label>
  </div>
</div></a></li>
<li><a className="dropdown-item" href="#"><div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label for="inputSkills" className="form-label">Machine Learning</label>
  </div>
</div></a></li>
<li><a className="dropdown-item" href="#"><div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label for="inputSkills" className="form-label">Artificial Intelligence</label>
  </div>
</div></a></li>
<li><a className="dropdown-item" href="#"><div className="input-group mb-3">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
    <label for="inputSkills" className="form-label">SQL</label>
  </div>
</div></a></li>
  </ul>
</div>

      <div className="col-4">
  <label for="formFile" className="form-label">Past Assignment</label>
  <input className="form-control" name ="PastAssignment"type="file" id="formFile"
  value={user.PastAssignment}
  onChange={handleInputs}/>
</div>
<div className="col-4">
  <label for="formFile" className="form-label">Present Assignment</label>
  <input className="form-control" name ="PresentAssignment" type="file" id="formFile"
 value={user.PresentAssignment}
 onChange={handleInputs} />
</div>  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class=" btn-primary">Submit</button>
  </div>
  </form>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}