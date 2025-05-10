import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const LocationSelector = ({locations, onChange}) => {
    let initialLocation = locations[0];
    const [location, setLocation] = useState(initialLocation);

    const handleOnChange = (event) => {
        setLocation(event.target.value);
        onChange(event.target.value);
    }

    return(
        <FormControl fullWidth>
            <InputLabel>Lokasi</InputLabel>
            <Select value={location} onChange={handleOnChange} label='Lokasi'>
                {locations.map((loc) => (
                    <MenuItem key={loc} value={loc}> {loc} </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default LocationSelector;