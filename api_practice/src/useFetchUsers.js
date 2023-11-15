import { useState, useEffect } from "react";
import axios from 'axios';

const useFetchUsers = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get
    })


};