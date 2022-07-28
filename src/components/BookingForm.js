import React, { useState } from "react";

function BookingForm() {
    const [formData, setFormData] = useState({
        provider:"",
        from:"",
        to:"",
        tickets:""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch(`https://busconnectserver.herokuapp.com/bookings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        
    }

    return (
        <div>
            <h1>Booking Form</h1>
            <form onSubmit={ handleSubmit } >
                <label htmlFor="from-select">From:</label>
                <select name="from" id="from-select" onChange={ handleChange } >
                    <option value="choose-place"></option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Kitale">Kitale</option>
                    <option value="Bungoma">Bungoma</option>
                </select>
                <label htmlFor="to-select">To:</label>
                <select name="to" id="to-select" onChange={ handleChange }>
                    <option value="choose-place"></option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Kitale">Kitale</option>
                    <option value="Bungoma">Bungoma</option>
                </select>
                <label htmlFor="tickets">{`Ticket(s)`}</label>
                <select name="tickets" id="tickets" onChange={ handleChange }>
                    <option value="choose"></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="provider">Provider</label>
                <select name="provider" id="provider" onChange={ handleChange }>
                    <option value="choose"></option>
                    <option value="MashPoa">MashPoa</option>
                    <option value="Rukagina">Rukagina</option>
                    <option value="MANMO">MANMO</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}

export default BookingForm