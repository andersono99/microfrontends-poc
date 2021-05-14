import React, { useState, useEffect } from "react";


export default function Root(props) {
  //return <section>{props.name} is mounted!</section>;
  const [data, setData] = useState(null);
/*   const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); */

  useEffect(() => {
/*     if (!login) return; */
/*     setLoading(true); */
    fetch(`https://dog.ceo/api/breed/hound/list`)
      .then(response => response.json())
      .then(setData)
      /* .then(() => setLoading(false))
      .catch(setError); */
  }, /* [loading] */);
  
 /*  if (loading) return <h1>Loading...</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  
  if (data) return null; */
  if (data) {
    return (<div>
      <h1>{Object.values(data['message']).map(item => <li key={item}>{item}</li>)}</h1>
      
      
    </div>)
  }

  return <div>Usuario no disponible</div>
}

