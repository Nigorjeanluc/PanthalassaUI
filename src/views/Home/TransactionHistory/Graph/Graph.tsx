import React from 'react';
import { Dimensions, View } from 'react-native';
import { useTheme, Box } from '../../../../components';
import { Theme } from '../../../../components/Theme';
import Underlay, { MARGIN } from './Underlay';
import { lerp } from './Scale';

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  // const step = width / data.length;
  const step = width / numberOfMonths;
  const values = data.map(p => p.value);
  const dates = data.map(p => p.date);
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  return (
  <Box
    paddingBottom={MARGIN}
    paddingLeft={MARGIN}
    marginTop="xl"
  >
    <Underlay
      minY={minY}
      maxY={maxY}
      startDate={startDate}
      numberOfMonths={numberOfMonths}
      // dates={dates}
      step={step}
    />
    <Box
      width={width}
      height={height}
    >
      {
        data.map(point => {
          // TODO: fix this
          const i = new Date(point.date - startDate).getMonth();
          // const step = width / numberOfMonths;
          return (
            <Box
              key={point.id}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY )}
            >
              <Box
                backgroundColor={point.color}
                position="absolute"
                opacity={0.1}
                top={0}
                bottom={0}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
                left={theme.spacing.m}
                right={theme.spacing.m}
              />
              <Box
                backgroundColor={point.color}
                position="absolute"
                top={0}
                height={30}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius="m"
              />
            </Box>
          )
        })
      }
    </Box>
  </Box>);
}

export default Graph;
