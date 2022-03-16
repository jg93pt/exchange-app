export const checkStatus = (response) => {
  if (response.ok) {
    // .ok returns true if response status is 200-299
    return response;
  }
  throw new Error('Request was either a 404 or 500');
}

export const json = (response) => response.json();

export const currencies = {
  AUD: {
    name: 'Australian dollar',
  },
  BGN: {
    name: 'Bulgarian lev',
  },
  BRL: {
    name: 'Brazilian real',
  },
  CAD: {
    name: 'Canadian dollar',
  },
  CHF: {
    name: 'Swiss franc',
  },
  CNY: {
    name: 'Chinese yuan',
  },
  CZK: {
    name: 'Czech koruna',
  },
  DKK: {
    name: 'Danish krone',
  },
  EUR: {
    name: 'Euro',
  },
  GBP: {
    name: 'British pound',
  },
  HKD: {
    name: 'Hong Kong dollar',
  },
  HRK: {
    name: 'Croatian kuna',
  },
  HUF: {
    name: 'Hungarian forint',
  },
  IDR: {
    name: 'Indonesian rupiah',
  },
  ILS: {
    name: 'Israeli new shekel',
  },
  INR: {
    name: 'Indian rupee',
  },
  ISK: {
    name: 'Icelandic króna',
  },
  JPY: {
    name: 'Japanese yen',
  },
  KRW: {
    name: 'South Korean won',
  },
  MXN: {
    name: 'Mexican peso',
  },
  MYR: {
    name: 'Malaysian ringgit',
  },
  NOK: {
    name: 'Norwegian krone',
  },
  NZD: {
    name: 'New Zealand dollar',
  },
  PHP: {
    name: 'Philippine peso',
  },
  PLN: {
    name: 'Polish złoty ',
  },
  RON: {
    name: 'Romanian leu',
  },
  RUB: {
    name: 'Russian ruble',
  },
  SEK: {
    name: 'Swedish krona',
  },
  SGD: {
    name: 'Singapore dollar',
  },
  THB: {
    name: 'Thai baht',
  },
  TRY: {
    name: 'Turkish lira',
  },
  USD: {
    name: 'United States dollar',
  },
  ZAR: {
    name: 'South African rand',
  },
}

