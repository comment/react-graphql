import React, {useEffect} from 'react';
import './App.css';
import {gql, useQuery} from "@apollo/client";


export type Customer = {
    id: number;
    name: string;
    industry: string;
}


const GET_DATA = gql`
{
  customers{
    id
    name
    industry
  }
}
`;

function App() {

    const {loading, error, data} = useQuery(GET_DATA);

    useEffect(() => {
        console.log(loading, error, data)
    })

    return (
        <div className="App">
            {data ? data.customers.map((customer: Customer) => {
                return (
                    <p>{customer.name + ' ' + customer.industry}</p>
                );
            }) : null}
        </div>
    );
}

export default App;
