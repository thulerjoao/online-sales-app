import Text from '../../../shared/components/text/text';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/button';
import { CreateUserContainer } from '../styles/createUser.style';
import { useCreateUser } from '../hooks/useCreateUser';

const CreateUser = () => {
  const { createUser, disable, handleOnChangeInput, handleCreateNewUser, loading } =
    useCreateUser();

  return (
    <CreateUserContainer>
      <Input
        onChange={(event) => handleOnChangeInput(event, 'name')}
        value={createUser.name}
        customMargin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Nome Completo"
      />
      <Input
        onChange={(event) => handleOnChangeInput(event, 'phone')}
        value={createUser.phone}
        customMargin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Telefone"
      />
      <Input
        onChange={(event) => handleOnChangeInput(event, 'email')}
        value={createUser.email}
        customMargin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Email"
      />
      <Input
        onChange={(event) => handleOnChangeInput(event, 'cpf')}
        value={createUser.cpf}
        customMargin="0px 0px 16px 0px"
        placeholder="Digite"
        title="CPF"
      />
      <Input
        onChange={(event) => handleOnChangeInput(event, 'password')}
        value={createUser.password}
        customMargin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Senha"
      />
      <Input
        onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
        value={createUser.confirmPassword}
        customMargin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Confirmar senha"
      />
      <Button
        disable={disable}
        onPress={handleCreateNewUser}
        loading={loading}
        margin="8px 0px 38px 0px"
        title="Criar usuário"
      />
    </CreateUserContainer>
  );
};

export default CreateUser;
