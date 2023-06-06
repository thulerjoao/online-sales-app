import { useEffect, useState } from 'react';
import { CreateUserType, UserType } from '../../../shared/types/types';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native/types';
import { useRequest } from '../../login/hooks/useRequest';
import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { userURL } from '../../../shared/functions/connection/apiUrl';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { CpfMask, PhoneMask } from '../../../shared/functions/connection/maskRegex';

export const useCreateUser = () => {
  const { request, loading } = useRequest();
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const [disable, setDisable] = useState<boolean>(true);
  const [createUser, setCreateUser] = useState<CreateUserType>({
    name: '',
    phone: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (
      createUser.name !== '' &&
      createUser.phone !== '' &&
      createUser.email !== '' &&
      createUser.cpf !== '' &&
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
      body: createUser,
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
    let text = event.nativeEvent.text;
    switch (prop) {
      case 'cpf':
        text = CpfMask(text);
        break;
      case 'phone':
        text = PhoneMask(text);
        break;
      default:
        text = text;
        break;
    }
    setCreateUser((currentCreateUser) => ({
      ...currentCreateUser,
      [prop]: text,
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
