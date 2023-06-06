import Text from '../../../shared/components/text/text';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/button/button';
import { CreateUserContainer } from '../styles/createUser.style';

const CreateUser = () => {
  return (
    <CreateUserContainer>
      <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="Nome Completo" />
      <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="Telefone" />
      <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="Email" />
      <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="CPF" />
      <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="Senha" />
      <Input customMargin="0px 0px 16px 0px" placeholder="Digite" title="Confirmar senha" />
      <Button margin="8px 0px 38px 0px" title="Criar usuário" />
    </CreateUserContainer>
  );
};

export default CreateUser;
