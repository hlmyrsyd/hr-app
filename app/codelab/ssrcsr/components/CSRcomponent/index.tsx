'use client'

import React, { useState, useEffect } from 'react'

export default function CSRComponent() {
    const [data, setData] = useState<string | null>(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate an API call with setTimeout for 2 seconds, replace with your API call
                const example = "Client-Side Fetched Data";
                setTimeout(() => {
                    return setData(example);
                }, 2000);
                
                // Uncomment the following lines to use a real API endpoint
                /*
                const response = await fetch('https://api.example.com/data');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                */
            } catch (e) {
                console.error('An error occurred while fetching the data:', e);
            }
        };

        fetchData();
    }, [])
    
    return <p>{data ? `Your data: ${data}` : 'Loading...'}</p>
}
