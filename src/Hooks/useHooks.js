import React, { useEffect, useState } from 'react';

const useHooks = () => {
    const [car, setCar] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])
    return [car, setCar]
};

export default useHooks;