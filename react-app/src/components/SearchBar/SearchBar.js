import React from "react";
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux' 
// import * as brewActions from '../../store/brews'


const SearchBar = () => {

    // const searchProjects = async (searchText) => {
    // const response = await fetch("/api/projects/all");
    // const allProjects = await response.json();
    // let stringCheck = searchText.replace(/[[\]']+/g, "");
    // stringCheck = stringCheck.replaceAll("\\", "");
    // let projectMatches = allProjects.filter((project) => {
    //     const regex = new RegExp(`${stringCheck}`, "gi");
    //     return (
    //     project.name.match(regex) ||
    //     project.description.match(regex) ||
    //     project.user.username.match(regex) ||
    //     project.user.city.match(regex) ||
    //     project.user.state.match(regex)
    //     );
    // });
    // if (searchText.length === 0) { 
    //     projectMatches = [];
    // }
    // setMatches(projectMatches);
    // };


    // useEffect(() => {
    // focusSearchBar();
    // });

    return (
        <>
            <div className="border-4 border-red rounded-xl flex m-4 max-w-6xl self-center">
                <input className='flex-grow focus:outline-none rounded-md' type="text" placeholder="Find Your Next Brew"></input>
                       
            </div>  
        </>
    )
}

export default SearchBar;
