
import {useParams} from 'react-router';
import React from 'react';
export default function SingleProfilePage(){
    const params=useParams();
    return <h1>Single Profile Page of {params.profileId}</h1>
}