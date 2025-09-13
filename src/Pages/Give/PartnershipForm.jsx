import React, { useState } from 'react'
import { CountriesOption, InputField, RadioSelect, Select } from '../../Components/FormInputs'
import { BiChevronDown } from 'react-icons/bi'
import { Button } from "../../Components/Utils/Button"
// import DatePicker from '../../Components/Utils/DatePicker'

export const PartnershipForm = () => {
  const [ showCountries, setShowCountries ] = useState(false)
  const [ searchInput, setSearchInput ] = useState('')
  const [ showPopUp, setShowPopUp ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ emptyFieldsError, setEmptyFieldsError ] = useState(false)
  const [ formInputs, setFormInputs ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    country: "",
    state: "",
    country: "",
    state: "",
    focus: "",
    currency: "",
    amount: "",
    frequency: ""

})
const cleanedInputs = Object.fromEntries(
  Object.entries(formInputs).map(([key, value]) => [key, value.replace(/\s+/g, ' ').trim()])
);
const handleChange = (e) => {
  setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value.replace(/\n/g, '<br>')
  })
}
const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)
 
  const isEmpty = Object.values(cleanedInputs).some(value => value === "");
  if (isEmpty) {
      setEmptyFieldsError(true)
      setLoading(false)
      document.querySelector(`form`)?.scrollIntoView({
          behavior: "smooth"
      })         
      dispatch(toggleShowAlert(true))
      dispatch(setAlertMessage("Please, fill out all fields!"))
      dispatch(setAlertType("error"))
      return;
  }
  setEmptyFieldsError(false)
  const subject = 'Important! New Student Registration'
  console.log(cleanedInputs)
  sendContactEmail(subject)        

}

const sendContactEmail = (subject) => {
  cleanedInputs.subject = subject
  axios.post(`http://localhost:80/api/registrationemail.php`, {
      data: cleanedInputs
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
          if(response.data.success == true){
              dispatch(setAlertType("success"))
              dispatch(toggleShowAlert(true))
              dispatch(setAlertMessage("Message sent successfully!"))
              clearForm()
          
          }else{
              isError()
          }
      })
      .catch(() => {
          isError()
      });
      setLoading(false)
}
const isError = () => {
    // dispatch(toggleShowAlert(true))
    // dispatch(setAlertMessage("Failed to send message!"))
    // dispatch(setAlertType("error"))
}
const clearForm = () => {
    setFormInputs({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        age: "",
        phoneNumber: "",
        country: "",
        course: ""
    })
}


  return (
    <section className="w-11/12 lg:w-10/12 mb-9 z-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full bg-opa city-30  px-7 md:px-9 p-9 rounded-2xl py-[5vh] bg-darkblue bg-opacity-5 border shado w-xl drop-shadow-2xl">
      <h2 className="text-xl lg:text-2xl font-bold mb-9 text-darkblue uppercase">Partnership Form</h2>
      <div className="flex flex-col lg:flex-row gap-9 justify-between items-center">
        <InputField 
          label="First Name"
          name="firstName"
          handleChange={handleChange}
          type="text"
          required={true}
          value={formInputs.firstName}
        />
        <InputField 
          label="Last Name"
          name="lastName"
          handleChange={handleChange}
          type="text"
          value={formInputs.lastName}
        />

      </div>
      <div className="flex flex-col lg:flex-row gap-9 justify-between items-center">
        <InputField 
        label="Email Address"
        name="email"
        handleChange={handleChange}
        type="email"
        required={true}
        value={formInputs.email}
        />
        <InputField 
        label="Phone Number"
        name="phoneNumber"
        handleChange={handleChange}
        type="tel"
        required={true}
        value={formInputs.phoneNumber}
        />

      </div>
      <div className="flex flex-col lg:flex-row gap-9 justify-between items-center">
        {/* <DatePicker
          setFormInputs={setFormInputs} 
          formInputs={formInputs} 
          label={"Date of Birth"}
          name={"dateOfBirth"}
          // activeDatePicker={""}
          // setActiveDatePicker={}
        /> */}

        {/* Country */}
        <InputField 
        label="Select Country"
        name="country"
        handleChange={handleChange}
        type="text"
        value={formInputs.country}
        isReadonly={true}
        func={() => {
            setShowPopUp('')
            setShowCountries(true)
        }}
        icon={
            <BiChevronDown className="text-4xl mr-2"/>
        }
        >
        <CountriesOption
            setFormInputs={setFormInputs}
            setShowCountries={setShowCountries} 
            showCountries={showCountries}                         
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            formInputs={formInputs}
        />
        </InputField>
        <InputField 
          label="State"
          name="state"
          handleChange={handleChange}
          type="text"
          value={formInputs.state}
        />
      </div>


        {/* MULTIPLE CHOICE  */}
        {/* required={true} */}


      <div className="flex flex-col lg:flex-row gap-9 justify-between items-center">
          <InputField 
          label="Currency"
          name="currency"
          required={true}
          handleChange={handleChange}
          type="text"
          value={formInputs.currency}
        />

        <InputField 
          label="Amount"
          name="amount"
          required={true}
          handleChange={handleChange}
          type="text"
          value={formInputs.amount}
        />


      </div>
      
        <InputField 
            label="Frequency"
            name="frequency"
            handleChange={handleChange}
            type="text"
            value={formInputs.frequency}
            isReadonly={true}
            func={() => {
                setShowCountries(false)
                setShowPopUp("frequency")
            }}
            icon={
                <BiChevronDown className="text-4xl mr-2"/>
            }
          >

          <Select 
              options={["Weekly", "Monthly", "Quaterly", "Annually"]}
              showPopUp={showPopUp}
              setShowPopUp={setShowPopUp}
              formInputs={formInputs}
              name={"frequency"}
              label={"Frequency"}
              />
        </InputField>

      {emptyFieldsError ? 
      <div className="text-red-900 text-lg flex gap-2 items-center col-span-2"><BsExclamationCircleFill /> Please, fill out all fields
      </div> 
      : ""
      }

      <div className="mt-5" onClick={(e) => !loading && handleSubmit(e)}>
      <Button 
          text={loading ? 
              <>
                  <span>Submitting</span>
                  <BiLoaderAlt className="animate-spin ml-2 text-xl" />
              </> 
              : <>Become a partner</>}
          btnType="primary"
      />
      </div>


      </form>
    </section>
  )
}

