import { useParams, useLoaderData } from "react-router-dom";
import CountryCetagory from "./CountryCetagory";

const SpeceficCountry = () => {
    const { countryName } = useParams();
    const speceficCountry = useLoaderData();

    const filteredCountries = speceficCountry.filter(item => item.country_Name === countryName);
    return (
        <div>
            <p>Tourist Spots in {countryName}: {filteredCountries.length}</p>
            <CountryCetagory items={filteredCountries} title={`Details of ${countryName}`} />
        </div>
    );
};

export default SpeceficCountry;
