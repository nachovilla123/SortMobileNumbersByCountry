export function filterNumbersByCountry(numbers) {
  const countries = [
    "Estados Unidos",
    "Alemania",
    "Austria",
    "Países Bajos",
    "Francia",
    "Reino Unido",
    "Italia",
    "Brasil",
    "Ecuador",
    "Argentina",
    "Perú",
    "México",
    "Uruguay",
    "El Salvador",
    "Colombia",
    "China",
    "Israel",
  ];
  const filteredNumbers = {};

  for (const number of numbers) {
    const country = getCountryFromPhoneNumber(number);
    if (countries.includes(country)) {
      if (filteredNumbers[country]) {
        filteredNumbers[country].push(number);
      } else {
        filteredNumbers[country] = [number];
      }
    }
  }

  return filteredNumbers;
}

// Números de teléfono proporcionados
export function getCountryFromPhoneNumber(phoneNumber) {
  if (/^\+593/.test(phoneNumber)) {
    return "Ecuador";
  } else if (/^\+54/.test(phoneNumber)) {
    return "Argentina";
  } else if (/^\+51/.test(phoneNumber)) {
    return "Perú";
  } else if (/^\+52/.test(phoneNumber)) {
    return "México";
  } else if (/^\+590/.test(phoneNumber)) {
    return "Guadalupe";
  } else if (/^\+33/.test(phoneNumber)) {
    return "Francia";
  } else if (/^\+31/.test(phoneNumber)) {
    return "Países Bajos";
  } else if (/^\+44/.test(phoneNumber)) {
    return "Reino Unido";
  } else if (/^\+39/.test(phoneNumber)) {
    return "Italia";
  } else if (/^\+55/.test(phoneNumber)) {
    return "Brasil";
  } else if (/^\+1/.test(phoneNumber)) {
    return "Estados Unidos";
  } else if (/^\+598/.test(phoneNumber)) {
    return "Uruguay";
  } else if (/^\+503/.test(phoneNumber)) {
    return "El Salvador";
  } else if (/^\+57/.test(phoneNumber)) {
    return "Colombia";
  } else if (/^\+49/.test(phoneNumber)) {
    return "Alemania";
  } else if (/^\+86/.test(phoneNumber)) {
    return "China";
  } else if (/^\+972/.test(phoneNumber)) {
    return "Israel";
  } else if (/^\+43/.test(phoneNumber)) {
    return "Austria";
  } else {
    return "Desconocido";
  }
}
