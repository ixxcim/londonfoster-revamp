import { style } from '@vanilla-extract/css';

export const container = style({
    backgroundImage: 'linear-gradient(to right, #002243, #006587)',
});

export const ImageGrid = style({
    display: 'grid',
    gridGap: '15px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gridTemplateRows: 'repeat(3, 150px)',
    gridAutoFlow: 'dense',
});
