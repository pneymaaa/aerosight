import { Card, CardContent, Typography, Box } from "@mui/material";

const AirQualityCard = ({ location, aqi, category  }) => {
  const getColor = (aqi) => {
    if (aqi <= 50) return 'success.main';
    if (aqi <= 100) return 'warning.main';
    return 'error.main';
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{location}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="h3" sx={{ color: getColor(aqi), mr: 2 }}>{aqi}</Typography>
          <Typography variant="body1">{category}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
export default AirQualityCard;
