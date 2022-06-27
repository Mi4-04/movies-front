import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import {
  MIN_VALUE_SLIDER,
  MAX_VALUE_SLIDER,
  STEP_VALUE_SLIDER,
} from "@app/constant";

interface IPopularityProps {
  voteAverage: number;
  setVoteAverage: (value: number) => void;
}

export const Popularity = ({
  voteAverage,
  setVoteAverage,
}: IPopularityProps) => {
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoteAverage(Number(e.target.value));
  };

  return (
    <Box sx={{ ml: 4, width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        {t(`filter.voteAverage`)}
      </Typography>
      <input
        type="range"
        min={MIN_VALUE_SLIDER}
        max={MAX_VALUE_SLIDER}
        step={STEP_VALUE_SLIDER}
        value={voteAverage}
        onChange={handleChange}
        aria-labelledby="input-slider"
      />
    </Box>
  );
};
