import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';
import { geolocated } from 'react-geolocated';
import axios from 'axios'
import firebase from "../../config/firebase";

const ministryOption = [
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

//  var location = props.coords;
const assets = [
  { label: "None", value: "None" },
  { label: "Cash", value: "Cash" },
  { label: "Wallet", value: "Wallet" },
  { label: "Gun", value: "Gun" },
  { label: "Vehicle", value: "Vehicle" },
  { label: "Atm Card", value: "AtmCard" }
]

var dateString = new Date();
dateString = new Date(dateString).toUTCString();
dateString = dateString.split(' ').slice(0, 5).join(' ');
console.log(dateString);
var counter  ;

const status = [
  { label: "true", value: true },
  { label: "false", value: false }

]

class AddCriminal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: dateString,
      location: '24.878023199999998 , 67.0212071',
      ministry: '',
      serialNo: ""  ,
      cnic: '',
      name: '',
      crime: '',
      crimeDescription: '',
      sentenceStatus: true,
      asset1: '',
      asset2: '',
      asset3: '',
      batchId: '',
      users: []
    }

    this.onChangeMinistry = this.onChangeMinistry.bind(this)
    this.onChangeSerialNo = this.onChangeSerialNo.bind(this)
    this.onChangeCnic = this.onChangeCnic.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeCrime = this.onChangeCrime.bind(this)
    this.onChangeCrimeDescription = this.onChangeCrimeDescription.bind(this)
    this.onChangeSentenceStatus = this.onChangeSentenceStatus.bind(this)
    this.onChangeAsset1 = this.onChangeAsset1.bind(this)
    this.onChangeAsset2 = this.onChangeAsset2.bind(this)
    this.onChangeAsset3 = this.onChangeAsset3.bind(this)
    this.onChangeBatchId = this.onChangeBatchId.bind(this)
    this.onChangeCurrentTime = this.onChangeCurrentTime.bind(this)
    this.onChangeLocation = this.onChangeLocation.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
componentDidMount(){
//   let db = firebase.firestore()
//   db.collection("Criminal").doc("Counter").get().then(data => {
//     console.log(data.data().counter)
//  counter = data.data().counter
//  this.setState({serialNo: counter})
//   })

    firebase.database().ref("serialNo").on('value' , snap => {
      debugger;
      this.setState({
        serialNo: snap.val().serialNo + 1,
      })
    })
     

    
}
  onCheck = e => {
    debugger;
    firebase.database().ref("addCriminal").on('value' , snap => {
      debugger;
      console.log(snap.val());
      // snap.forEach(data => {
      //   debugger;
      //   this.state.users.push({
      //     ...data.val()
      //   })
      // })
    })
    console.log(this.state)
  }
  onChangeMinistry(event) {
    console.log(event.value)

    this.setState({ ministry: event.value })

  }
  onChangeSerialNo(event) {
    console.log(event.target.value)

    this.setState({ serialNo: event.target.value })

  }
  onChangeCnic(event) {
    console.log(event.target.value)

    this.setState({ cnic: event.target.value })

  }
  onChangeName(event) {
    console.log(event.target.value)

    this.setState({ name: event.target.value })

  }
  onChangeCrime(event) {
    console.log(event.target.value)

    this.setState({ crime: event.target.value })

  }
  onChangeCrimeDescription(event) {
    console.log(event.target.value)

    this.setState({ crimeDescription: event.target.value })

  }
  onChangeSentenceStatus(event) {
    console.log(event.value)

    this.setState({ sentenceStatus: event.value })

  }
  onChangeAsset1(event) {
    console.log(event.value)

    this.setState({ asset1: event.value })

  }
  onChangeAsset2(event) {

    console.log(event.value)

    this.setState({ asset2: event.value })
  }
  onChangeAsset3(event) {
    console.log(event.value)

    this.setState({ asset3: event.value })
  }
  onChangeBatchId(event) {
    debugger;
    console.log(Number(event.target.value))

    this.setState({ batchId: Number(event.target.value) })

  }
  onChangeCurrentTime(event) {
    console.log(event.target.value)

    this.setState({ currentTime: event.target.value })

  }
  onChangeLocation(event) {
    console.log(event.target.value)

    this.setState({ location: event.target.value })

  }
  onSubmit() {
    
   
     let objTwo= {};

    let obj = {
      Ministry: this.state.ministry,
      // SerialNo:this.state.serialNo,
      Cnic: this.state.cnic,
      Name: this.state.name,
      crime: this.state.crime,
      Description: this.state.crimeDescription,
      sentenceStatus: this.state.sentenceStatus,
      AssetDescription1: this.state.asset1,
      AssetDescription2: this.state.asset2,
      AssetDescription3: this.state.asset3,
      // batchId: this.state.batchId,
      timeStamp: this.state.currentTime,
      Location: this.state.location
    }

    console.log(obj)
     
    firebase
      .database()
      .ref("authorisedPerson")
      .orderByChild("batchId")
      .equalTo(this.state.batchId)
      .on("value", (snap) => {
        if(snap.hasChildren()){
          snap.forEach((data) => {
            objTwo = {
              Ministry: this.state.ministry,
      // SerialNo:this.state.serialNo,
      Cnic: this.state.cnic,
      Name: this.state.name,
      crime: this.state.crime,
      Description: this.state.crimeDescription,
      sentenceStatus: this.state.sentenceStatus,
      AssetDescription1: this.state.asset1,
      AssetDescription2: this.state.asset2,
      AssetDescription3: this.state.asset3,
      // batchId: this.state.batchId,
      timeStamp: this.state.currentTime,
      Location: this.state.location,
      authorisedPerson: data.val().name
            }
          })
          firebase.database().ref().child("addCriminal").push(objTwo).then((success) => {
            console.log("retrieve data" , success);
            firebase.database().ref(`addCriminal/${success.key}`).update(
                {
                  SerialNo: this.state.serialNo,
                  batchId: this.state.batchId,
                }
            ).then(successTwo => {
              firebase.database().ref(`serialNo`).update(
                {
                  serialNo: this.state.serialNo,
                }
            ).then(successThre => {
            })
            })
            window.alert("Criminal Added Successfully!");
            window.location.reload();
          })
        }
        else{
          window.alert("No Registered Ministry Found!")
        }
      })

    

    // axios.post("http://35.222.10.88:3000/api/Criminals", obj).then(response => {
    //   if(response.status == 200){
    //     alert("Criminal has been added")
         
    //     var db = firebase.firestore()
    //     db.collection("Criminal").doc("Counter") .update({
    //         counter:  counter + 1
    //     })
    //     .then(function() {
    //         console.log("Document successfully updated!");
    //     })
    //     .catch(function(error) {
    //         // The document probably doesn't exist.
    //         console.error("Error updating document: ", error);
    //     });
    //     this.setState({
    //       // currentTime: JSON.stringify(recentTime),
    //   // location: '24.878023199999998 , 67.0212071',
    //   ministry: '',
    //    cnic: '',
    //   name: '',
    //   crime: '',
    //   crimeDescription: '',
    //   sentenceStatus: '',
    //   asset1: '',
    //   asset2: '',
    //   asset3: '',
    //   batchId: ''
    //     })
    //   }
    //   else{
    //     alert("Criminal has not been added Please Try again")
      

    //   }
    //   // console.log(response.status)

    // })
    //   .catch(err => {
    //     alert("Something went wrong. Try Again")
      
    //     // console.log(err)
    //   });



  }

  render() {
    console.log("usersss" , this.state.users);
    return (
      <div className="form-styling" >

        <FormGroup>
          <Label className = " headin-styling"for="exampleEmail">Select Ministry</Label>
          <Select
            className=" name "
            //   classNamePrefix="select"
            onChange={this.onChangeMinistry}
            //   name="color"
            options={ministryOption}
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Serial no</Label>
          <Input
            type="text"
            name="Serial no"
            onChange={this.onChangeSerialNo}
            value={this.state.serialNo}
            id="serial no"
            placeholder="Serial no"
            disabled
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Batch id</Label>
          <Input
            type="number"
            name="Batch id"
            onChange={this.onChangeBatchId}
            value={this.state.batchId}
            id="batch id"
            placeholder="Batch id"
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">CNIC</Label>
          <Input
            type="number"
            name="CNIC"
            onChange={this.onChangeCnic}
            value={this.state.cnic}
            id="cnic"
            placeholder="CNIC Number"
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChangeName}
            value={this.state.name}
            id="name"
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Crime</Label>
          <Input
            type="text"
            name="crime"

            onChange={this.onChangeCrime}
            value={this.state.crime}
            id="crime"
            placeholder="Crime"
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Crime Description</Label>
          <Input
            type="textarea"
            name="Crime Description"
            onChange={this.onChangeCrimeDescription}
            value={this.state.crimeDescription}
            id="crime description"
            placeholder="Crime Description"
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Sentence Status</Label>
          <Select
            className=" name "
            //   classNamePrefix="select"
            onChange={this.onChangeSentenceStatus}
            //   name="color"
            options={status}
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Select Asset 1</Label>
          <Select
            className=" name "
            onChange={this.onChangeAsset1}
            //  value = {this.state.asset1}
            options={assets}
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Select Asset 2</Label>
          <Select
            className=" name "
            onChange={this.onChangeAsset2}
            //  value = {this.state.asset2}
            options={assets}
          />
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Select Asset 3</Label>
          <Select
            className=" name "
            onChange={this.onChangeAsset3}
            //  value = {this.state.asset3}
            options={assets}
          />
        </FormGroup>
       
        {console.log(this.state.currentTime)}
        <FormGroup>
          <Label className = " headin-styling">Timestamp</Label>
          <Input
            type="text"
            name="time"
            onChange={this.onChangeCurrentTime}
            id="time"
            value={this.state.currentTime}
            disabled>

          </Input>
        </FormGroup>
        {/* {console.log(this.props.coords)} */}
        <FormGroup>
          <Label className = " headin-styling">Current location</Label>
          <Input
            type="text"
            name="Location"
            // onChange = {this.onChangeLocation}
            value={this.state.location}
            id="location"
            // value={this.state}
            disabled
          >

          </Input>

          <Button style={{ marginTop: "1em" }} onClick={this.onSubmit} >Add Criminal</Button>
        </FormGroup>

      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(AddCriminal)
