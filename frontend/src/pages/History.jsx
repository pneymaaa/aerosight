import { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import LocationSelector from "../components/LocationSelector";
import AirQualityChart from "../components/AirQualityChart";

const dummyData = [
  { timestamp: '2025-05-01', pm25: 35 },
  { timestamp: '2025-05-02', pm25: 50 },
  { timestamp: '2025-05-03', pm25: 42 },
  { timestamp: '2025-05-04', pm25: 65 },
  { timestamp: '2025-05-05', pm25: 48 },
]
const locationSelectors = ['Jakarta','Bandung','Surabaya'];

const History = () => {
    const [selectedLocation, setSelectedLocation] = useState('Jakarta');
    return ( 
        <Container sx={{ mt:3, mb: 2}}>
            <Typography variant="h4" sx={{ mb:3 }}>
                History of Air Quality
            </Typography>
            <LocationSelector locations={locationSelectors} onChange={setSelectedLocation} />
            <Box sx={{mt: 3}}>
                <Typography variant="h6" gutterBottom>
                    Trend PM2.5 in {selectedLocation}
                </Typography>
                <AirQualityChart data={dummyData} param="pm25"></AirQualityChart>
            </Box>
        </Container>
     );
}
 
export default History;