import React , {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import firebase from "../../config/firebase";
import {getCriminalData} from '../../store/actions/actions'
import Axios from 'axios';
import RecordList from './Recordlist'
import thunk from 'redux-thunk';
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

 
class SearchCriminal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show:false,
     cnic: '',
     criminalData : []
     
    }

    this.onChangeCnic = this.onChangeCnic.bind(this)
        this.onSubmit = this.onSubmit.bind(this)


  }

  onChangeCnic(event){
    debugger;
  console.log(event.target.value)

    this.setState({cnic: event.target.value})
    
}
getDesireDataWithKeys(data) {
  let getData = [];
  let getKeys = Object.keys(data);
  getKeys.forEach((item) => {
    getData.push({ ...data[item], key: item });
  });
  return getData;
}
onSubmit(){
  firebase
  .database()
  .ref("addCriminal")
  .orderByChild("Cnic")
  .equalTo(this.state.cnic)
  .on("value" , (snap) => {
    if(snap.hasChildren()){
    let getData = this.getDesireDataWithKeys(snap.val());
    this.setState({
      show: true,
      criminalData: getData,
    })
  }
  else{
    this.setState({
      show: false
    })
    window.alert("No Criminal Found")
  }
  })
//     this.setState({show:true})
//     let obj =
//     {
//     "Cnic": this.state.cnic
//   }
//   let that =this
//   let criminaldata = []
//   console.log(obj)

//   Axios.get('http://35.222.10.88:3000/api/Criminals?filter=',obj)
//   .then(response =>{
     
//     console.log(response.data );  
//      for(var i = 0 ; i<response.data.length;i++){
//        console.log(response.data[i]);
//        console.log(response.data[i].Cnic )
//        console.log(this.state.cnic)
//        if(response.data[i].Cnic == this.state.cnic ){
//        console.log(response.data.Cnic , "inside")

//          criminaldata.push(response.data[i])


//        }
       


//      }
      

//      console.log(criminaldata)
//      this.setState({criminalData:criminaldata})
    
//     // console.log(response.status)
// })
//   .catch(err =>{
//     console.log(err)
//     alert("Something went wrong. Please try again")
   

//   })
   
 
}
PrintContent = el => {
  var restorepage = document.body.innerHTML;
  var Printcontent = document.getElementById(el).innerHTML;
  document.body.innerHTML = Printcontent;
  window.print();
  document.body.innerHTML = restorepage;
  window.location.reload();
};

  render() {
    console.log("Criminal List Search" , this.state.criminalData)
    return (
      <div > 
              <div className = "form-styling" >
      
        <FormGroup  visible = "hidden">
          <Label className = " headin-styling">Please Enter Criminals Cnic</Label>
        
     
        </FormGroup>
       
        <FormGroup>
          {/* <Label className = " headin-styling">Criminals cnic</Label> */}
          <Input
            type="number"
            name="cnic"
            id="cnic"
            placeholder="CNIC"
            onChange = {this.onChangeCnic}
            value = {this.state.cnic}
          />
        </FormGroup> 
        <Button style = {{marginTop:"1em"}} onClick = {this.onSubmit}>Search Criminal</Button>
 

      </div>
      {/* <div className = "form-styling" >
      <table>
          <tr>
              <th>Criminal Name</th>
              <td>{ this.state.name}</td>
          </tr>
       
          <tr>
              <th>Criminal Cnic</th>
              <td>{ this.state.criminalCnic}</td>
          </tr>
          <tr>
              <th>Crime</th>
              <td>{ this.state.crime}</td>
          </tr>
          <tr>
              <th>Crime Description</th>
              <td>{ this.state.crimeDescription}</td>
          </tr>
          <tr>
              <th>Ministry </th>
              <td>{ this.state.ministry}</td>
          </tr>
          <tr>
              <th>Ministry Location</th>
              <td>{ this.state.location}</td>
          </tr>
          <tr>
              <th>Ministry Id</th>
              <td>{ this.state.id}</td>
          </tr>
          <tr>
              <th>Criminal Assets</th>
              <td>{ this.state.criminalAsset1}</td>
          </tr>
          <tr>
              <th>Criminal Assets</th>
              <td> { this.state.criminalAsset2}</td>
          </tr>
          <tr>
              <th>Criminal Assets</th>
              <td>{ this.state.criminalAsset3}</td>
          </tr>
          <tr>
              <th>Sentence Status</th>
              <td> { this.state.sentenceStatus}</td>
          </tr>
        
      </table>
      </div> */}
      <div>
      <div id="div1">
      <div className = "form-styling" >
        <div style={{textAlign: "center"}}>
          <h2>Criminal Record</h2>
          </div>
   {  (this.state.show) ?   ( 
  this.state.criminalData.map((data) => {
    return (
      <React.Fragment>
      <table>
          <tr>
              <th className = " headin-styling">Serial No</th>
              <td className = " headin-styling">{ data.SerialNo}</td>
          </tr>
          <tr>
              <th className = " headin-styling">Criminal Name</th>
              <td className = " headin-styling">{ data.Name}</td>
          </tr>
       
          <tr>
              <th className = " headin-styling">Criminal Cnic</th>
              <td className = " headin-styling">{ data.Cnic}</td>
          </tr>
          <tr>
              <th className = " headin-styling">Crime</th>
              <td className = " headin-styling">{ data.crime}</td>
          </tr>
          <tr>
              <th className = " headin-styling">Crime Description</th>
              <td className = " headin-styling">{ data.Description}</td>
          </tr>
          <tr>
              <th className = " headin-styling">Ministry </th>
              <td className = " headin-styling">{ data.Ministry}</td>
          </tr>
          <tr>
              <th className = " headin-styling">Ministry Location</th>
              <td className = " headin-styling">{ data.Location}</td>
          </tr>
          <tr>
              <th className = " headin-styling">Ministry Id</th>
              <td className = " headin-styling">{ data.batchId}</td>
          </tr>
          <tr>
              <th className = " headin-styling">Criminal Assets</th>
              <td className = " headin-styling">{ data.AssetDescription1}</td>
          </tr>
          <tr>
              <th className = " headin-styling" >Criminal Assets</th>
              <td className = " headin-styling"> { data.AssetDescription2}</td>
          </tr>
          <tr>
              <th className = " headin-styling">Criminal Assets</th>
              <td className = " headin-styling">{ data.AssetDescription3}</td>
          </tr>
          <tr>
              <th className = " headin-styling">Sentence Status</th>
              <td className = " headin-styling"> { JSON.stringify(data.sentenceStatus) }</td>
          </tr>
          <tr>
              <th className = " headin-styling">Time Stamp</th>
              <td className = " headin-styling">{ data.timeStamp}</td>
          </tr>
        
      </table>
      <hr/>
      </React.Fragment>
          )
        }
        )
        
    
    
    
          ):null
     }
      </div>
   </div>
   <Button style = {{marginTop:"1em" , float: "right" }} onClick = {() => this.PrintContent('div1')}>Print Record</Button>
   </div>
   </div>
    );
  }
}


// function mapDispatchToProp(dispatch) {
//     return ({
       
//          CriminalData: (data) => {
//         dispatch(getCriminalData(data));
//       } 
      
//     })
//   }

export default connect(null, null)(SearchCriminal)



