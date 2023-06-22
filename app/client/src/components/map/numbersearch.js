import React from 'react';
import "./pic.css";


const Numbersearch = () => { // Validierung
    //Ellements//
    


    function validierung(el) {
        let input = document.getElementById('search-input');
        input.value = input.value.replace(/[^0-9A-Z]/g, '').slice(0, 4);
    }

    function GetCampPlace(value) {
        let input = document.getElementById('search-input');
        let paths = document.getElementsByTagName('path')
        console.log(input.value);
        for (let i = 0; i < paths.length; i++) {
            if(input.value == paths[i].id){
                paths[i].classList.add('selectedCamper');
            }
        }   
    }

    return (
        <nav class="navbar">
            <a href="#" class="logo">Green Camping</a>
            <ul class="nav-links">
                <li>
                    <div class="search-container">
                        <input type="text" id="search-input" placeholder="Search ID..." maxlength="4"
                            onInput={validierung}/>
                        <button type="submit" id="search-button"
                            onClick={GetCampPlace()}>Search</button>
                    </div>
                </li>
                <li>  </li>
            </ul>
        </nav>

    );
}

export default Numbersearch;
