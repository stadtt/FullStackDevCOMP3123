import React, {useState} from 'react';

const UserSignup = () => {

    const provinces = ["ON","MB","BC","QC"]
    const [formData, setFormData] = useState({
        email: "",
        fullname: "",
        address1: "",
        address2:"",
        city:"",
        province:"",
        postalcode:"",
        termsAccepted:false,
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false)
    const handleChange = (e) => {
        const{name,value,type,checked} = e.target
        setFormData({
            ...formData,
            [name]:type === 'checkbox' ? checked  : value,
        })    
    }
    const validateForm = () =>{
        let formErrors = {};
        if (!formData.fullname.trim()) formErrors.fullname = "Full name is Required";
        if (!formData.email.trim()) formErrors.email = 'email is required';
        if (!formData.city.trim()) formErrors.city = 'city is required';
        if (!formData.address1.trim()) formErrors.address1 = 'address is required';
        if (!formData.address2.trim()) formErrors.address2 = 'address is required';
        if (!formData.postalcode.trim()) formErrors.postalcode = 'postalcode is required';
         if (!formData.province.trim()) formErrors.province = 'province is required';
         if (!formData.termsAccepted) formErrors.termsAccepted = 'You must accept the terms';
         setErrors(formErrors);
         return Object.keys(formErrors).length === 0;
      

    };
     const handleSubmit =(e) => {
        e.preventDefault();
        if(validateForm()){
            console.log("Form Data: ", formData)
            setSubmitted(true);
        }

    };

    return(
        <div>
            {submitted ? (
          <div>
          <h2>Signup Successful!</h2>
          <p>Fullname: {formData.fullname}</p>
          <p>Email : {formData.email}</p>
          <p>Address: {formData.address1}</p>
          <p>Address: {formData.address2}</p>
          <p>City: {formData.city}</p>
          <p>Province: {formData.province}</p>
          <p>postalcode: {formData.postalcode}</p>
            <div>
            {JSON.stringify(formData, null, 2)}
            </div>
        </div>
      ) : (

<form onSubmit={handleSubmit}>
          <h2>User Signup</h2>
          <div>
            <label>Fullname:</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <span style={{ color: 'red' }}>{errors.fullname}</span>}
          </div>
         
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
          <div>
            <label>Address:</label>
            <textarea
            type="text"
            name="address1" //
            value={formData.address1}
            onChange={handleChange}
            />
            {errors.address1 && <span style={{ color: 'red' }}>{errors.address1}</span>}
          </div>
           <div>
            <label>Address:</label>
            <textarea
            type="text"
            name="address2" 
            value={formData.address2}
            onChange={handleChange}
            />
            {errors.address2 && <span style={{ color: 'red' }}>{errors.address2}</span>}
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}
          </div>
          <div>
            <label>Postal Code:</label>
            <input
              type="text"
              name="postalcode"
              value={formData.postalcode}
              onChange={handleChange}
            />
            {errors.postalcode && <span style={{ color: 'red' }}>{errors.postalcode}</span>}
          </div>
           <div>
            <label>Province:</label>
            <select name="province" value={formData.province} onChange={handleChange}>
              <option value="">Select</option>
              {
                provinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                ))
              }
            </select>
            {errors.province && <span style={{ color: 'red' }}>{errors.province}</span>}
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              I accept the terms and conditions
            </label>
            {errors.termsAccepted && <span style={{ color: 'red' }}>{errors.termsAccepted}</span>}
          </div>
          <button type="submit">Signup</button>
        </form>
      ) }
    </div>
    );
};

export default UserSignup;