import React , {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';
import firebase from "../../config/firebase";
import Axios from 'axios';
const ministries= [
  { label: "Police Station", value: "PoliceStation" },
  { label: "Airport", value: "Airport" },
  { label: "Pakistan Armed Force", value: "PakistanArmedForce" },
  { label: "Pakistan Air Force", value: "PakistanAirForce" },
  { label: "Pakistan Navy", value: "PakistanNavy" },
  { label: "Pakistan Army", value: "PakistanArmy" },
  { label: "Airport Security Forces", value: "AirportSecurityForces" },
  { label: "Fedral Intelligence", value: "FedralIntelligence" },
  { label: "Intelligence Bureau", value: "IntelligenceBureau" },
  { label: "Pakistan Rangers", value: "PakistanRangers" },
  { label: "Law And Justice", value: "LawAndJustice" },
  { label: "Supreme Court", value: "SupremeCourt" }
 ]

 
class AddAuthorisedPerson extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ministry: "",
      batchId: "",
      name: ""
    }

    this.onChangeMinistry = this.onChangeMinistry.bind(this)
    this.onChangeBatchId = this.onChangeBatchId.bind(this)
    this.onSubmit = this.onSubmit.bind(this)


  }


  componentDidMount(){
    firebase.database().ref("serialNo").on('value' , snap => {
      debugger;
      this.setState({
        batchId: snap.val().batchId + 1,
      })
    })
  }
  onChangeMinistry(event){
  console.log(event.value)

    this.setState({ministry: event.value})

}
onChangeBatchId(event){
  console.log(event.target.value)

  this.setState({batchId: event.target.value})

}

onNameChange = e => {
  this.setState({
    name: e.target.value
  })
}
onSubmit(){

  let obj =
  {
    batchId: this.state.batchId,
    MinistryCategory: this.state.ministry,
    name: this.state.name
  }
  console.log(obj)

  firebase.database().ref().child("authorisedPerson").push(obj).then((success) => {
    console.log("retrieve data" , success);
      firebase.database().ref(`serialNo`).update(
        {
          batchId: this.state.batchId
        }
    ).then(successThre => {
      window.alert("Authorised Person Added!");
    })
  })
  .catch(error => {
    window.alert("Something Went Wrong");
  })

//   Axios.post('http://35.222.10.88:3000/api/MinistryPerson/',obj)
//   .then(response =>{
//     if(response.status == 200){
//       alert("Ministry has been added")
//       window.location.reload();

//       this.setState({ batchId:""})
//     }
//     else{
//       alert("Ministry has not been added. Please Try again")
//       window.location.reload();
//     }
//     // console.log(response.status)
// })
//   .catch(err =>{
//     console.log(err)
//     alert("Something went wrong. Please try again")
//     window.location.reload();

//   })

}

  render() {
    return (
      <div className = "form-styling" >
      
        <FormGroup>
          <Label className = " headin-styling">Select Ministry</Label>
          <Select
         className=" name "
       //   classNamePrefix="select"
           onChange = {this.onChangeMinistry}
       //   name="color"
         options={ministries}
       />
        </FormGroup>
       
        <FormGroup>
          <Label className = " headin-styling">Batch id</Label>
          <Input
            type="text"
            name="Batch id"
            id="batch id"
            placeholder="Batch id"
            onChange = {this.onChangeBatchId}
            value = {this.state.batchId}
            disabled
          />
        </FormGroup> 
        <FormGroup>
          <Label className = " headin-styling">Name</Label>
          <Input
            type="text"
            name="name"
            id="batch id"
            placeholder="Authorized Person Name"
            onChange = {this.onNameChange}
            value = {this.state.name}
          />
        </FormGroup> 
        <Button style = {{marginTop:"1em"}} onClick = {this.onSubmit}>Add Ministry</Button>

      </div>
    );
  }
}

export default AddAuthorisedPerson
