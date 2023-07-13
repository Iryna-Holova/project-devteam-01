const mainVars = {
    breakpoints: {
      mob: '375px',
      mobMax: '767px',
      tab: '768px',
      tabMax: '1439px',
      desk: '1440px',
    },
    transitions: {
      main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
};
export const lightTheme = {
    ...mainVars,
    color: {
        colorMain: '#fafafa',
        colorSecondary: '#ffffff',
        colorTextPrimary: '#001833',
        colorTextSecondary: '#3e4462',
        colorText: '#23262a',
        colorAccent: '#8baa36',
        colorAccentSecondary: '#ebf3d4',
        colorFooter: '#22252a',
        colorInput: '#d9d9d9',
        colorStartBG: '#2a2c36',
        colorStartText: '#fafafa',
    },
  };
  
  export const darkTheme = {
    ...mainVars,
    color: {
        colorSecondary: '#2a2c36',
        colorMain: '#1e1f28',
        colorTextPrimary: '#fafafa',
        colorTextSecondary: '#fafafa',
        colorText: 'rgba(250, 250, 250, 0.6)',
        colorAccentSecondary: '#2a2c36',
        colorFooter: '#8baa36',
        colorinputcolor: 'rgba(250, 250, 250, 0.2)',
    },
  };