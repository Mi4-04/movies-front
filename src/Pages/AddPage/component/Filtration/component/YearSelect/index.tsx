import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { SelectChangeEvent } from "@mui/material";

interface IYearSelectProps {
  year: string;
  setYear: (value: string) => void;
}

export const YearSelect = ({ year, setYear }: IYearSelectProps) => {
  const { t } = useTranslation();

  let date: number[] = [];

  for (let i = 1999; i <= new Date().getFullYear(); i++) {
    date.push(i);
  }

  const handleChange = (e: SelectChangeEvent<string>) => {
    setYear(e.target.value);
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
          value={year}
          onChange={handleChange}
        >
          {date?.map((dateYear) => (
            <MenuItem key={dateYear} value={dateYear}>
              {dateYear}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
