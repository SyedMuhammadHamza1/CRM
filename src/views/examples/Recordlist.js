import React , {Component} from 'react'
import {connect} from 'react-redux';
 
 
class RecordList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
     CriminalData : this.props.criminalData
     
    }

    


    

}
 componentDidMount(){
return( 
    console.log(this.state.CriminalData, "data in recordList")
 )  }


 

  render() {
    return (
      <div className = "form-styling" >
      <table>
          <tr>
              <th>Criminal Name</th>
              <td></td>
          </tr>
          <tr>
              <th>Criminal Name</th>
              <td></td>
          </tr>
          <tr>
              <th>Criminal Name</th>
              <td></td>
          </tr>
          <tr>
              <th>Criminal Cnic</th>
              <td></td>
          </tr>
          <tr>
              <th>Crime</th>
              <td></td>
          </tr>
          <tr>
              <th>Crime Description</th>
              <td></td>
          </tr>
          <tr>
              <th>Ministry </th>
              <td></td>
          </tr>
          <tr>
              <th>Ministry Location</th>
              <td></td>
          </tr>
          <tr>
              <th>Ministry Id</th>
              <td></td>
          </tr>
          <tr>
              <th>Criminal Assets</th>
              <td></td>
          </tr>
          <tr>
              <th>Criminal Assets</th>
              <td></td>
          </tr>
          <tr>
              <th>Criminal Assets</th>
              <td></td>
          </tr>
          <tr>
              <th>Sentence Status</th>
              <td></td>
          </tr>
        
      </table>
      </div>
    );
  }
}
function mapStateToProp(state) {
    console.log(state)
    return ({
    criminalData : state.root.criminalData

    })
  }

export default connect ( mapStateToProp,null)(RecordList)
