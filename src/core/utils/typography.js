import Typography from 'typography';
import theme from 'typography-theme-moraga';

// Override
theme.headerColor = 'var(--primaryText)';
theme.scaleRatio = 2;

const typography = new Typography(theme);

export default typography;
