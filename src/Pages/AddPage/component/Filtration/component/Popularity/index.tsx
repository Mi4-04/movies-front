import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export const Popularity = (props: {
  voteAverage: number;
  setVoteAverage: (value: number) => void;
}) => {
  const { t } = useTranslation();

  const handleChange = (e: any) => {
    props.setVoteAverage(e.target.value);
  };

  return (
    <Box sx={{ ml: 4, width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        {t(`filter.vote_average`)}
      </Typography>
      <Slider
        min={0}
        max={10}
        step={0.1}
        value={props.voteAverage}
        onChange={handleChange}
        aria-labelledby="input-slider"
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
