import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList';
import Grid from '../components/Grid/Grid';
import GridItem from '../components/GridItem/GridItem';
import { useEffect, useState } from 'react';
import { getCountries } from '../service/countryApi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // I
    // const getData = async () => {
    //   const data = await getCountries()
    //   setCountries(data)
    // }
    // getData()

    // II
    getCountries().then(data => setCountries(data));
  }, []);

  return (
    <Section>
      <Container>
        <CountryList />
        <Grid>
          {countries.map(item => (
            <GridItem key={item.id}>
              <Link>
                <img src={item.flag} alt={item.country} />
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
export default Home;
