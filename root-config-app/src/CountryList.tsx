import React from 'react';

const CountryList = ({countryList=[]}) => {
  return (
    <>
    { countryList.map((data,index) => {
        if (data) {
          return (
            <div key={data}>
              <h1>{data}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default CountryList