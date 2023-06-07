import { removeSpecialCharacters } from "./caracters";

export const CpfMask = (cpf: string) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const PhoneMask = (phone: string) => {
  const noMask = removeSpecialCharacters(phone);
  return noMask
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(noMask.length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2');
};
