import { Container, Typography } from "@mui/material";
import AirQualityCard from "../components/AirQualityCard";

const dummyData = [
    { location: 'Jakarta', aqi: 58, category: 'Sedang' },
    { location: 'Bandung', aqi: 32, category: 'Baik' },
    { location: 'Surabaya', aqi: 110, category: 'Tidak Sehat untuk Sensitif' }
  ];
  
  const Dashboard = () => {
    return ( 
        <Container sx={{ mt:3, mb: 2}}>
            <Typography variant="h4" gutterBottom>Air Quality Dashboard</Typography>
            {dummyData.map((item) =>(
                <AirQualityCard  
                    key={item.location}
                    location={item.location}
                    aqi={item.aqi}
                    category={item.category}
                />
            ))}
        </Container>
     );
  }
   
  export default Dashboard;