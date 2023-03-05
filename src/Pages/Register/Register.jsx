import React from 'react'
import r1 from '../../assets/images/Register/Vector 35.svg'
import r2 from '../../assets/images/Register/Almost Done.svg'
import './Register.css'

function Register() {
  return (
    <div className="wrapper">
      <div className="registration">
        <img src={r1} alt=".." style={{ width: "5", height: "2" }} />
        <img src={r2} alt=".." style={{ width: "15", height: "5" }} />
        <img src={r1} alt=".." style={{ width: "5", height: "2" }} />
      </div>
      <p className='pr1'>Enter Your Personal Information</p>
      <div className="form1">
        <form>
          <label style={{ color: "#ff5e0e" }}><strong>Personal Information</strong> </label>
          <br />
          <label>
            <strong>FIRST NAME</strong>
            <br />
            <input type="text" name="FNAME" value={"Enter your first name"} style={{ width: "300%" }} />
          </label>
          <br />
          <label>
            <strong>LAST NAME</strong>
            <br />
            <input type="text" name="LNAME" value={"Enter your last name"} style={{ width: "300%" }} />
          </label>
          <br />
          <label>
            <strong>EMAIL</strong>
            <br />
            <input type="text" name="email" value={"example@gmail.com"} style={{ width: "300%" }} />
          </label>
          <br />
          <label for="birthday">BIRTHDAY</label><br />
          <input type="date" id="birthday" name="birthday"></input>
          <br />
          <label>GENDER</label><br />
          <select id="gender" name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />
          <label>CLUB CITY</label><br />
          <select id="CC" name="CC">
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          {/* <hr style={{color: "wheat", width: "300%", marginTop: "2%"}}></hr> */}
          <br />
          <form>
            <label style={{ color: "#ff5e0e" }}><strong>Address</strong> </label>
            <br />
            <label>
              <strong>ADDRESS LINE 1</strong>
              <br />
              <input type="text" name="FNAME" value={"123 street name"} style={{ width: "300%" }} />
            </label><br />
            <label>
              <strong>ADRESS LINE 2 (OPTIONAL)</strong>
              <br />
              <input type="text" name="FNAME" value={"456 STREET NAME"} style={{ width: "300%" }} />
            </label>
            <br />
            <label>
              <strong>CITY</strong>
              <br />
              <input type="text" name="FNAME" value={"CITY NAME"} style={{ width: "300%" }} />
            </label>
            <br />
            <label>
      <strong>POSTAL CODE</strong>
      <br/>
      <input type="number" name="FNAME" value={"123456"} style={{width: "300%"}}/>
    </label>
    <br/>
    <label>
      <strong>COUNTRY</strong>
      <br/>
      <input type="text" name="FNAME" value={"INDIA"} style={{width: "300%"}}/>
    </label>
    <br/>
    <label>
      <strong>PHONE NUMBER</strong>
      <br/>
      <input type="text" name="FNAME" value={"+123456789"} style={{width: "300%"}}/>
    </label>
          </form>
          <form>
          <label style={{ color: "#ff5e0e" }}><strong>Emergency Contact</strong> </label>
          <br />
          <label>
            <strong>FIRST NAME</strong>
            <br />
            <input type="text" name="FNAME" value={"Enter your first name"} style={{ width: "300%" }} />
          </label>
          <br />
          <label>
            <strong>LAST NAME</strong>
            <br />
            <input type="text" name="LNAME" value={"Enter your last name"} style={{ width: "300%" }} />
          </label>
          <br />
          <label>
            <strong>RELATIONSHIP</strong>
            <br />
            <input type="text" name="LNAME" value={"PARENT/ UNCLE/ ETC."} style={{ width: "300%" }} />
          </label>
          <br />
          <label>
      <strong>PHONE NUMBER</strong>
      <br/>
      <input type="text" name="FNAME" value={"+123456789"} style={{width: "300%"}}/>
    </label>
          </form>
        </form>
      </div>
      <div>
      <p className='pr2'>TO COMPLETE YOUR MEMBERSHIP, WE REQUIRE TWO FORMS OF AUTHORISED PAYMENT: A CREDIT CARD FOR THE PAYMENT DUE TODAY,<br/> AND A BANK ACCOUNT (CHECKING OR SAVINGS) FOR YOUR RECURRING AND ANNUAL DUES.</p>
    </div>
    <div className="form2">
      <form>
          <label style={{ color: "#ff5e0e" }}><strong>Due today - Payment Info</strong> </label>
          <br />
          <label>
            <strong>CREDIT CARD NUMBER</strong>
            <br />
            <input type="text" name="FNAME" value={"XXXXXXXXXXXXXXX"} style={{ width: "100%" }} />
          </label>
          <br/>
          <label><strong>EXPIRATION</strong><br/>
            <input type="text" value={"XX"} style={{width: "10%"}}></input> / <input type="text" value={"XX"} style={{width: "10%"}}></input>
          </label>
          <br/>
          <label>
            <strong>CSV NUMBER</strong><br/>
            <input type="text" value={"XXX"} style={{width: "10%"}}></input>
            </label>
            <br/>
            <label>
            <strong>Name On Card</strong>
            <br />
            <input type="text" name="LNAME" value={"Name on Card"} style={{ width: "100%" }} />
          </label>
          <label style={{ color: "#ff5e0e" }}><strong>Due today - Payment Info</strong> </label>
          <br />
          <label>
            <strong>BANK ACCOUNT NUMBER</strong>
            <br />
            <input type="text" name="FNAME" value={"BANK ACCOUNT NUMBER"} style={{ width: "100%" }} />
          </label>
          <br/>
          <label>
            <strong>BANK ROUTING NUMBER</strong>
            <br />
            <input type="text" name="FNAME" value={"BANK ROUTING NUMBER"} style={{ width: "100%" }} />
          </label>
          </form>
    </div>
    <p className='pr3'>WE WILL CHARGE THIS CARD TODAY AND USE YOUR BANK ACCOUNT FOR RECURRING PAYMENTS.</p>
    
    <p className='pr4'>WE WILL ALSO KEEP THIS CREDIT CARD ON FILE AS A BACKUP TO YOUR ACCOUNT. WE WILL USE IT IF WE ARE UNABLE TO PROCESS YOUR MONTH RECURRING DUES OR ANNUAL DUES TO YOUR BANK ACCOUNT ON FILE.</p>
    </div>
  )
}

export default Register