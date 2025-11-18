import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component
{

    state = {
        persons: []
    }

    componentDidMount()
    {

        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res =>
            {
                const persons = res.data.results;


                this.setState({ persons });
            })
            .catch(error =>
            {
                console.error("Error fetching data: ", error);
            });
    }
    render()
    {
        return (
            <div>
                <h3>User List</h3>
                <table border="1" cellPadding="5">
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Gender</th>

                        </tr>
                    </thead>
                    <tbody>

                        {this.state.persons.map(person => (
                            <tr key={person.login.uuid}>

                                <td>{person.login.uuid.substring(0, 8)}...</td>
                                <td>{person.name.first} {person.name.last}</td>
                                <td>{person.email}</td>
                                <td>{person.location.country}</td>
                                <td>{person.gender}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
            </div>
        );
    }
}

export default PersonList;