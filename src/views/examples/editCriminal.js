import React , {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Select from 'react-select';
import Axios from 'axios';
import firebase from "../../config/firebase";
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

 const status = [
  { label: "true", value: true },
  { label: "false", value: false }

]

 
class EditCriminal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      check: null,
      status: "",
      cnic: "",
      name: "",
      crime: "",
      crimeDescription:'',
      ministry: '',
      batchId: '',
      criminalId: '',
      SerialNo: "",
      criminalList: [],
      criminalId: [],
    }

    this.onChangeMinistry = this.onChangeMinistry.bind(this)
    this.onChangeBatchId = this.onChangeBatchId.bind(this)
    this.onChangeCriminalId = this.onChangeCriminalId.bind(this)
    this.onSubmit = this.onSubmit.bind(this)


  }

  componentDidMount(){
    // firebase
    // .database()
    // .ref("addCriminal")
    // .orderByChild("SerialNo")
    // .equalTo(5)
    // .on("value" , (snap) => {
     
    //   console.log("Data aya" ,snap.val());
    //        let getData = this.getDesireDataWithKeys(snap.val());
    //     if(getData[0].batchId == 3 && getData[0].Ministry == "PakistanAirForce"){
    //       debugger;
    //       console.log("snap key" , getData)
    //       firebase
    //       .database()
    //       .ref(`addCriminal/${getData[0].key}`).update(
    //         {
    //          sentenceStatus: !getData[0].sentenceStatus
    //         }
    //     ).then(success => {
    //       debugger
    //     }).catch( error =>{
    //       debugger;
    //     })
    //       window.alert("All Okay")
    //     }
    //     else{
    //       window.alert("Not Okay")
    //     }
    //     // this.state.criminalId.push({
    //     //   label: data.val().SerialNo,
    //     //   value: data.val().SerialNo,
    //     // })
      
    // })
  }
        
      

  onChangeMinistry(event){
    console.log(event.value)
    this.setState({ministry: event.value})

}
onChangeBatchId(event){
  console.log(event.target.value)

  this.setState({batchId: event.target.value})

}
onChangeCriminalId(event){
  console.log(Number(event.target.value))
  debugger;
  this.setState({criminalId: Number(event.target.value)})

}

onSubmit(){

  // let obj = {
  //   "$class": "criminalsystem.ChangeCriminalStatus",
  //   "CriminalId": this.state.criminalId,
  //   "MinistryPersonId": this.state.batchId,
  //   "MinistryCategory": this.state.ministry


  // }
  // console.log(obj)
  // Axios.post('http://35.222.10.88:3000/api/ChangeCriminalStatus' ,obj ).then(response =>{
  //   if(response.status == 200){
  //     alert("Criminal status has been changed")
  //     window.location.reload();

  //     this.setState({
  //       ministry: '',
  //     batchId: '',
  //     criminalId: ''
  //     })
  //   }
  //   else{
  //     alert("Criminal not found")
  //     window.location.reload();

  //   }
  //   // console.log(response.status)

  // })
  //   .catch(err => {
  //     alert("Something went wrong.Please Try Again")
  //     window.location.reload();

  //     // console.log(err)
  //   });
  firebase
    .database()
    .ref("addCriminal")
    .orderByChild("SerialNo")
    .equalTo(this.state.criminalId)
    .on("value" , (snap) => {
     
      console.log("Data aya" ,snap.val());
      if(snap.hasChildren()){
           let getData = this.getDesireDataWithKeys(snap.val());
        if(getData[0].batchId == this.state.batchId && getData[0].Ministry == this.state.ministry){
          debugger;
          console.log("snap key" , getData)
          firebase
          .database()
          .ref(`addCriminal/${getData[0].key}`).update(
            {
             sentenceStatus: this.state.status
            }
        ).then(success => {
          debugger;
          window.alert("Sentence Status Updated Successfully!")
          this.setState({
            ministry: "",
            batchId: "",
            criminalId: '',
            status: ''
          })
        }).catch( error =>{
          this.setState({
            ministry: "",
            batchId: "",
            criminalId: '',
            status: ''
          })
          debugger;
        })
         }
        else{
          window.alert("Criminal ID Does not match with Ministry and Batch ID")
          this.setState({
            ministry: "",
            batchId: "",
            criminalId: '',
            status: ''
          })
        }
        
      }
      else{
        window.alert("Criminal ID Does not Exist!")
        this.setState({
          ministry: "",
          batchId: "",
          criminalId: '',
          status: ''
        })
      }
        // this.state.criminalId.push({
        //   label: data.val().SerialNo,
        //   value: data.val().SerialNo,
        // })
      
    })
}
 getDesireDataWithKeys(data) {
  let getData = [];
  let getKeys = Object.keys(data);
  getKeys.forEach((item) => {
    getData.push({ ...data[item], key: item });
  });
  return getData;
}
// onCriminalIdSelect = e =>{
//   console.log(e.value);
//   firebase
//   .database()
//   .ref("addCriminal")
//   .orderByChild("SerialNo")
//   .equalTo(e.value)
//   .on("value" , (snap) => {
//     let getData = this.getDesireDataWithKeys(snap.val());
//     this.setState({
//       criminalList: getData,
//       batchId: getData[0].batchId,
//       ministry: getData[0].Ministry,
//       name: getData[0].Name,
//       crime: getData[0].crime,
//       cnic: getData[0].Cnic,
//       crimeDescription: getData[0].Description,
//       status: getData[0].sentenceStatus
//     })
//   })
// }
onChangeSentenceStatus=(e) => {
  console.log(e.value)
  debugger;
  this.setState({ status: e.value })

}
  render() {
    console.log("Criminal List"  , this.state.criminalList)
    console.log("Criminal List Ids"  , this.state.criminalId)
    return (
    <div className = "form-styling">
       <FormGroup>
       <Label className = " headin-styling">Select Criminal Id</Label>
       <Input
            type="text"
            name="Batch id"
            id="batch id"
            onChange = {this.onChangeCriminalId}
            value = {this.state.criminalId}
            placeholder="Criminal Id"
          />          
        </FormGroup>
        <FormGroup>
          <Label className = " headin-styling">Select Ministry</Label>
          <Select
         className=" name "
           onChange = {this.onChangeMinistry}
         options={ministries}
       />
        </FormGroup>
        
        <FormGroup>
          <Label className = " headin-styling">Ministery Person Batch Id</Label>
          <Input
            type="text"
            name="Batch id"
            id="batch id"
            onChange = {this.onChangeBatchId}
            value = {this.state.batchId}
            placeholder="Batch id"
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
       
       
        
     
        <Button style = {{marginTop:"1em"}} onClick = {this.onSubmit}>Edit Record</Button>
       
      </div>
    );
  }
}

export default EditCriminal
