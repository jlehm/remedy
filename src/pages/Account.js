import React from 'react'
import withAuthorization from './../HOCs/withAuthorization.js'

import PasswordForgetForm from './../components/PasswordForget.js'
import PasswordChangeForm from './../components/PasswordChange.js'

import FormInput from './../components/FormInput.js'

import './../components/PasswordForget.css'

import './../pages/Account.css'

const account = {
  "accountNumber": "0216319258",
  "owner" : {
    "fullName": "John Smith",
    "phoneNumber": "(830) 465-1940",
    "billingAddressStreet": "123 Alamo Street",
    "billingAddressCity": "Helotes, Texas 78023",
  },
  "service": [
    {
    "contract": {
      "number": "043858",
      "date": "05-15-2019",
      "owner": "John Smith",
      "location" : {
        "addressStreetNumber": "123",
        "addressStreetName": "Hill Road",
        "addressCity": "Helotes",
        "addressZipcode": "78023",
      },
      "type" : "bag service",
      "frequency" : "weekly",
      "equipment" : "none",
      }
    },
  ] 
}
const AccountPage = ( props ) => {
  return (
  <React.Fragment>  
    <div className="fullContent">
      <h2>Account Details</h2>
    </div>
    <div className="accountInformation">
      <div className="card">
        <div className="cardSubTitle">Account Number</div>
        <div className="cardReference">{account.accountNumber}</div>
        <div className="cardSubTitle">Full Name</div>
        <div className="cardReference">{account.owner.fullName}</div>        
        <div className="cardSubTitle">Phone Number</div>
        <div className="cardReference">{account.owner.phoneNumber}</div>        
        <div className="cardSubTitle">Billing Address</div>
        <div className="cardReference">{account.owner.billingAddressStreet}</div>
        <div className="cardReference">{account.owner.billingAddressCity}</div>         
      </div>
      <button  
        type="submit"
        className="passwordChangeButton"
      >
        Edit Details
      </button> 
    </div>
    <div className="accountInformation">
        {account.service.map(({contract}) => {
          return (
            <div className="card" key={contract.number} >
              <div className="cardSubTitle">Contract Number</div>
              <div className="cardReference">{contract.number}</div>
              <div className="cardSubTitle">Starting Date</div>
              <div className="cardReference">{contract.date}</div>
              <div className="cardSubTitle">Address</div>
              <div className="cardReference">{contract.location.addressStreetNumber + " " + contract.location.addressStreetName}</div>          
              <div className="cardReference">{contract.location.addressCity + ", Texas " + contract.location.addressZipcode}</div>                        
              <div className="cardSubTitle">Type</div>
              <div className="cardReference">{contract.type}</div> 
              <div className="cardSubTitle">Frequency</div>
              <div className="cardReference">{contract.frequency}</div> 
              <div className="cardSubTitle">Equipment</div>
              <div className="cardReference">{contract.equipment}</div>
            </div>
          )
        })}
      <button  
        type="submit"
        className="passwordChangeButton"
      >
        + Add Services
      </button>  
    </div>
    <div className="fullContent">
      <h2>Monthly Charges</h2>
      <div className="card">
        <table>
          <tr>
            <th>Billing Period</th>
            <th>Payment Date</th>
            <th>Payment Amount</th>
          </tr>
          <tr>
            <td>April 20, 2019 to May 20, 2019</td>
            <td>May 16, 2019</td>
            <td>$36.85</td>
          </tr>
        </table>
      </div> 
    </div>
    <div className="accountInformation">
      <h2>Payment Method</h2>
      <div className="card">
        <div className="cardTitle"><i>VISA</i> -9034  (expires 02/23)</div>
        <div className="cardSubTitle"></div>
      </div>
      <button  
        type="submit"
        className="passwordChangeButton"
      >
        Update Method
      </button>  
    </div>
    <div className="fullContent">
      <h2>Billing Statements</h2>
      <div className="card">
        <table>
          <tr>
            <th>Billing Period</th>
            <th>Payment Date</th>
            <th>Payment Amount</th>
            <th>Payment Status</th>
          </tr>
          <tr>
            <td>March 29, 2019 – April 20, 2019</td>
            <td>April 15, 2019</td>
            <td>$36.85</td>
            <td>paid – on time</td>
          </tr>
          <tr>
            <td>February 17, 2019 – March 19, 2019</td>
            <td>March 14, 2019</td>
            <td>$36.85</td>
            <td>paid – on time</td>
          </tr>
          <tr>
            <td>January 16, 2019 – February 17, 2019</td>
            <td>February 12, 2019</td>
            <td>$36.85</td>
            <td>paid – on time</td>
          </tr>
        </table>
      </div> 
    </div>
    <div className="accountInformation">  
      <h2>Edit Account Details</h2>
      <div className="formWrapper">
        <form className="passwordForgetForm">
          <FormInput type="text" name="firstName" placeholder="First Name" />
          <FormInput type="text" name="middleName" placeholder="Middle Name" />
          <FormInput type="text" name="lastName" placeholder="Last Name" />
          <button  
          type="submit"
          className="passwordChangeButton"
        >
          Submit Changes
        </button>
          <FormInput type="text" name="phoneNumber" placeholder="Phone Number" />
          <button  
          type="submit"
          className="passwordChangeButton"
        >
          Submit Changes
        </button>
          <FormInput type="text" name="billingAddressNumber" placeholder="Street Number" />
          <FormInput type="text" name="billingAddressStreet" placeholder="Street Name" />
          <FormInput type="text" name="billingAddressCity" placeholder="City" />
          <FormInput type="text" name="billingAddressState" placeholder="State" />
          <FormInput type="text" name="billingAddressZip" placeholder="Zipcode" />
          <button  
          type="submit"
          className="passwordChangeButton"
        >
          Submit Changes
        </button>
        </form>  
      </div>
    </div> 
    <div className="accountInformation">
      <h2>Password Reset</h2>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </div>
  </React.Fragment>
  )
}
const condition = authUser => !!authUser

export default withAuthorization(condition)(AccountPage)
