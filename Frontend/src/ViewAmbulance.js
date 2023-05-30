import React, { Component } from 'react';
import ambulanceService from './AmbulanceService';

function deleteUser(id){
    fetch(`http://localhost:8080/api/ambulances/${id}`,{
        method:'DELETE'
    }).then((res) => 
        res.text()).then((text) => {
            document.getElementById("usermessage").innerHTML = text;
            refreshPage();
    });
}

function refreshPage() {
    window.location.reload(false);
}

class ViewAmbulance extends Component {

    constructor(props){
        super(props)

        this.state = {
            ambulance :[]
        }

    }

    componentDidMount(){
        var urole = sessionStorage.getItem("user_role");
        //if(urole === "ADMIN" || urole === "STAFF"){
        ambulanceService.getAllAmbulance().then((res) => {
            this.setState({ambulance: res.data});
        });
        //}else{
          //  this.props.history.push('/login');
        
    }

    deleteControll(id){
        var role = sessionStorage.getItem("user_role");
        if(role === "ADMIN"){
           return <button type='button' className="btn btn-danger mb-2" onClick={()=>deleteUser(id)} ><i className='fas fa-trash-alt' /></button>;
        }else{
            return <button type='button' className="btn btn-danger mb-2" disabled><i className='fas fa-trash-alt' /></button>;
        }
    }

    backControll(){
        var role = sessionStorage.getItem("user_role");
        if(role === "ADMIN"){
           return <a href='/admin' className='offset-md-11'><button type='button' className='btn btn-secondary'>Back</button></a>;
        }else{
            return <a href='/staff' className='offset-md-11'><button type='button' className='btn btn-secondary'>Back</button></a>;
        }
    }

    render() {
        return (
            <div className='text-center'>
                <div className='col-md-10 offset-md-1 rounded p-2 mt-2 shadow'>
                    <div className='container'>
                        {
                            this.backControll()
                        }
                            <table id='usertable' className='table table-hover table-bordered'>
                                <thead><td colSpan="12"style={{ fontSize: 30 }} ><b>Ambulance List</b></td></thead>
                                <thead className='table-dark'>
                                    <tr>
                                        <td><b>ID No.</b></td>
                                        <td><b>Ambulance Detail</b></td>
                                        <td><b>Feature</b></td>
                                        <td><b>Vehicle No</b></td>
                                        <td><b>Driver Name</b></td>
                                        <td><b>Mail</b></td>
                                        <td><b>Contact</b></td>
                                        <td><b>Latitude</b></td>
                                        <td><b>Longitude</b></td>
                                        <td><b>Status</b></td>

                                        
                                    </tr>
                                </thead>
                                <p id='usermessage'></p>
                                <tbody>
                                    {
                                        this.state.ambulance.map(
                                            ambulance => 
                                            <tr key={ambulance.id}>
                                                <td>{ambulance.id}</td>
                                                <td>{ambulance.ambulancedetail}</td>
                                                <td>{ambulance.features}</td>
                                                <td>{ambulance.vehicleno}</td>
                                                <td>{ambulance.drivername}</td>
                                                <td>{ambulance.email}</td>
                                                <td>{ambulance.phone}</td>
                                                <td>{ambulance.latitude}</td>
                                                <td>{ambulance.longitude}</td>
                                                <td>{ambulance.status}</td>
                                               
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
        );
    }
}

export default ViewAmbulance;