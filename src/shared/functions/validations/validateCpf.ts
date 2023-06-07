import { removeSpecialCharacters } from "../caracters";

export const validateCPF = (cpf: string): boolean => {
  const cleanCPF = removeSpecialCharacters(cpf); // Remove any non-digit characters
  if (cleanCPF.length !== 11) {
    return false; // CPF must have exactly 11 digits
  }

  // Check for repeated digits
  if (/^(\d)\1{10}$/.test(cleanCPF)) {
    return false; // CPF with repeated digits are invalid
  }

  // Validate CPF using a checksum algorithm
  const cpfDigits = cleanCPF.split('').map(Number);
  const [digit1, digit2, digit3, digit4, digit5, digit6, digit7, digit8, digit9, digit10, digit11] =
    cpfDigits;

  const calculateChecksum = (digits: number[]): number => {
    let sum = 0;
    let factor = digits.length + 1;

    for (const digit of digits) {
      sum += digit * factor;
      factor--;
    }

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const calculatedDigit1 = calculateChecksum([
    digit1,
    digit2,
    digit3,
    digit4,
    digit5,
    digit6,
    digit7,
    digit8,
    digit9,
  ]);
  if (calculatedDigit1 !== digit10) {
    return false; // Invalid CPF
  }

  const calculatedDigit2 = calculateChecksum([
    digit1,
    digit2,
    digit3,
    digit4,
    digit5,
    digit6,
    digit7,
    digit8,
    digit9,
    digit10,
  ]);
  if (calculatedDigit2 !== digit11) {
    return false; // Invalid CPF
  }

  return true; // CPF is valid
};
