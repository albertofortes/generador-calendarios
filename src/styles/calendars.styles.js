import { css, keyframes, styled } from '@mui/system'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const CalendarsWrapper = styled('div')(() => ({
  padding: '1rem',

  'h2': {
    margin: '1rem 0',
    
    '&::first-letter': {
      textTransform: 'uppercase'
    }
  },

  'table.generated-calendar': {
    borderCollapse: 'collapse',
    width: '100%',
    pageBreakAfter: 'right',

    'td, th': {
      padding: '5ch',
      textAlign: 'center',
      position: 'relative',
      height: '12rem',
      border: '.25rem solid #ccc',

      '.day': {
        backgroundColor: '#efefef',
        borderRadius: '50%',
        padding: '1ch',
        width: '3rem',
        height: '3rem',
        position: 'absolute',
        top: '1ch',
        left: '1ch'
      }
    },

    'th': {
      fontWeight: 'bold',
      backgroundColor:' #f9f9f9',
      border: '.25rem solid #ccc',
    }
  }
}))

export const CustomSnackbar = styled('div')(() => css`
    position: fixed;
    z-index: 5500;
    display: flex;
    left: 2rem;
    top: 5rem;
    left: auto;
    justify-content: start;
    max-width: 50rem;
    min-width: 30rem;
    background-color: red;
    border-radius: .3rem;
    border: 1px solid red;
    box-shadow: 0 .25rem 5.rem -.3rem rgba(0,0,0,.4);
    padding: .75rem;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    animation: ${snackbarInLeft} 500ms;
    transition: transform .2s ease-out;
  `
)

export const PinnedObjectButton = styled('button')(() => css`
  background: #1a73e8;
  color: #fff;
  padding: 2.4rem .75rem;
  font: normal 600 1.4rem/1.6rem 'Muli', sans-serif;
  margin: 0 0 .5rem 0;
  border-radius: 0 0 .8rem 0.8rem;
  border-width: 0;
  box-shadow: 0 .24rem .24rem .24rem rgb(0 0 0 / 5%);
  text-align: center;
  display: block;
  z-index: 4;
  overflow: hidden;
  position: absolute;
  top: -1.2rem;
  right: 5%;
  cursor: pointer;

  &::after {
    content: '';
    border-color: #fff;
    border-style: solid;
    border-width: .2rem .2rem 0 0;
    transform: rotate(134deg) translateX(50%);
    position: absolute;
    left: 50%;
    bottom: 1.5rem;
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    top: 0;
  }

  @media print {
    display: none
  }
`)

export const DatePickerBox = styled('div')(() => css`
  padding: 1rem;
  background: #eaf1fb;

  @media print {
    display: none
  }
`)

export const DatePick = styled(DatePicker)(() => css`
  padding: 1rem;
  border-radius: .3rem;
  font-size: 1.4rem;
`)

export const DatePickerWrapper = styled('div')(() => css`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  > label {
    padding: 1rem;
    font-size: 1.4rem;

    &:first-child {
      padding-left: 0;
    }
  }

  .react-datepicker-wrapper {
    width: auto;
  }

  .react-datepicker__month {
    font-size: 1.4rem;
  }

  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
    font-size: 1.4rem;
  }

  .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
    top: 1.25rem
  }
`)

const snackbarInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`