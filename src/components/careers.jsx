import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
    const careersData = useLoaderData()
    return (
        <div className="careers">
            {careersData.map(eachCareer => (
                <Link to={eachCareer.id.toString()} key={eachCareer.id}>
                    <p>{eachCareer.title}</p>
                    <p>Based in {eachCareer.location}</p>
                </Link>
            ))}
        </div>
    )
}
export default Careers;

export const careersLoaders = async () => {
    const res = await fetch("http://localhost:4000/careers")
    return res.json()
}