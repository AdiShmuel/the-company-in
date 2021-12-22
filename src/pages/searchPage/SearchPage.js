import {useState} from 'react';
import Companies from '../../components/Companies';

const SearchPage = () => {
    const [companyInput, setCompanyInput] = useState('');
    const [searchedCompanies, setSearchedCompanies] = useState(JSON.parse(localStorage.getItem('companies')) || []);
    const handleSearch = async () => {
        if (companyInput) {
            const newCompany = {id: companyInput , logo: 'fff', name: companyInput, type: 'public'}
            const newCompanies = [...searchedCompanies, newCompany];
            setSearchedCompanies(companies => newCompanies);
            localStorage.setItem('companies', JSON.stringify(newCompanies));
            setCompanyInput('');
            // const url = '/controller/company/' + companyInput;
            // fetch(url)
            //     .then(data => {
            //         return data.json();
            //     })
            //     .then(post => {
            //         console.log(post);
            //     }).catch(error => console.error('Unable to get items.', error));

            // fetchData().then(response => {
            //
            //     console.log(response)
            // });
            // fetch('/controller/company', companyParams).then(response => {
            //
            //     console.log(response)
            //     const newCompany = {logo: 'fff', name: companyInput, type: 'public'}
            //     setSearchedCompanies(companies => [...companies, newCompany]);
            // });
        }
    };

    const handleChange = (event) => {
        setCompanyInput(event.target.value);
    }


    return (
        <div>
            <input type="text" value={companyInput} onChange={handleChange}/>
            <button type="button" onClick={handleSearch}>Search</button>
            <Companies companies={searchedCompanies}/>
        </div>
    );
}


export default SearchPage;
