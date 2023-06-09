import { useEffect, useState } from 'react';
import { CreateUserType, UserType } from '../../../shared/types/types';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native/types';
import { useRequest } from '../../login/hooks/useRequest';
import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { userURL } from '../../../shared/functions/connection/apiUrl';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { validateCPF } from '../../../shared/functions/validations/validateCpf';
import { validatePhoneNumber } from '../../../shared/functions/validations/validatePhone';
import { validateEmail } from '../../../shared/functions/validations/validateEmail';
import { removeSpecialCharacters } from '../../../shared/functions/caracters';

export const DEFAULT_CREATE_USER = {
  name: '',
  phone: '',
  email: '',
  cpf: '',
  password: '',
  confirmPassword: '',
};

export const useCreateUser = () => {
  const { request, loading } = useRequest();
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const [disable, setDisable] = useState<boolean>(true);
  const [createUser, setCreateUser] = useState<CreateUserType>(DEFAULT_CREATE_USER);

  useEffect(() => {
    if (
      createUser.name !== '' &&
      validatePhoneNumber(createUser.phone) &&
      validateEmail(createUser.email) &&
      validateCPF(createUser.cpf) &&
      createUser.password !== '' &&
      createUser.confirmPassword !== '' &&
      createUser.confirmPassword === createUser.password
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [createUser]);

  const handleCreateNewUser = async () => {
    const resultCreateUser = await request({
      url: userURL,
      method: MethodEnum.POST,
      body: {
        ...createUser,
        phone: removeSpecialCharacters(createUser.phone),
        cpf: removeSpecialCharacters(createUser.cpf),
      },
      message: 'Usuário cadastrado',
    });

    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{ name: RoutersUrl.LOGIN }],
      });
    }
  };

  const handleOnChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    prop: string,
  ) => {
    setCreateUser((currentCreateUser) => ({
      ...currentCreateUser,
      [prop]: event.nativeEvent.text,
    }));
  };

  return {
    createUser,
    loading,
    disable,
    handleOnChangeInput,
    handleCreateNewUser,
  };
};
