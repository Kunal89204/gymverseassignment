

export const exerciseOptions = {
    method: 'GET',
   
    headers: {
         'x-rapidapi-host': 'exercisedb.p.rapidapi.com',

      // 'x-rapidapi-key':"647d6fb919msh5c1033cafbe8ac8p1b147bjsnf4b7d2c8e890 "
     
    }
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };