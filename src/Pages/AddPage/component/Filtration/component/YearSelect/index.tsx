import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

export const YearSelect = (props: {
  year: string;
  setYear: (value: any) => void;
}) => {
  const { t } = useTranslation();
  const [date, setDate] = React.useState<number[]>([]);

  React.useEffect(() => {
    for (let i = 1999; i <= new Date().getFullYear(); i++) {
      date.push(i);
    }
    setDate([...date]);
  }, []);

  const handleChange = (e: any) => {
    props.setYear(e.target.value);
  };

  return (
    <Box sx={{ mt: 2, mb: 2, ml: 3, width: 250 }}>
      <FormControl fullWidth>
        <InputLabel form="demo-simple-select-label">
          {t(`filter.release_date`)}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={t(`filter.release_date`)}
          value={props.year}
          onChange={handleChange}
        >
          {date?.map((dateYear) => {
            return (
              <MenuItem key={dateYear} value={dateYear}>
                {dateYear}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
