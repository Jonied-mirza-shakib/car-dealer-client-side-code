import React, { useEffect, useState } from 'react';

const useHooks = () => {
    const [car, setCar] = useState([]);
    useEffect(() => {
        fetch('https://infinite-everglades-72393.herokuapp.com/data')
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])
    return [car, setCar]
};

export default useHooks;