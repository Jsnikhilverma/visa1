"use client";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * @typedef {Object} Country
 * @property {string} name - The name of the country.
 */

export default function LocationForm() {
  const [countries, setCountries] = useState([]);

  const [selectedCountry1, setSelectedCountry1] = useState(""); // For the first dropdown
  const [selectedCountry2, setSelectedCountry2] = useState(""); // For the second dropdown

  // Fetch country list
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => {
        setCountries(res.data.data.map((c: { name: string }) => c.name));
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", {
      country1: selectedCountry1,
      country2: selectedCountry2,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto text-white rounded-lg shadow-lg"
    >
      <div className="flex flex-row items-end justify-between gap-4 flex-wrap">
        <div className="flex flex-col flex-1 min-w-[100px]">
          {/* <label htmlFor="country1" className="mb-1 font-medium">
            Your Passport
          </label> */}
          <select
            id="country1"
            className="border px-3 py-3 rounded-xl"
            value={selectedCountry1}
            onChange={(e) => setSelectedCountry1(e.target.value)}
          >
            <option value="">Your Passport</option>
            {countries.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col flex-1 min-w-[100px]">
          {/* <label htmlFor="country2" className="mb-1 font-medium">
            You want to go
          </label> */}
          <select
            id="country2"
            className="border px-3 py-3 rounded-xl"
            value={selectedCountry2}
            onChange={(e) => setSelectedCountry2(e.target.value)}
          >
            <option value="">Destination</option>
            {countries.map((country, idx) => (
              <option key={idx} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button> */}
    </form>
  );
}
