import { removeSpecialCharacters } from "../caracters";

export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const cleanNumber = removeSpecialCharacters(phoneNumber); // Remove any non-digit characters
  
    const phone = cleanNumber.slice(2);
    if (phone.length !== 9 && phone.length !== 8) {
      return false; // Phone number must have exactly 9 digits
    }
    return true; // Phone number is valid
  }
 