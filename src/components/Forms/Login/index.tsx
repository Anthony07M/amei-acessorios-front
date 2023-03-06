import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../Buttons/Button";
import { Container } from "./styles";

type InputsType = {
    email: string,
    password: string,
}


export const LoginForm = () => {
    const { register, handleSubmit, } = useForm<InputsType>()
    const onSubmit = (values: InputsType) => {
        console.log(values);
    }
    return (
        <Container>
            <h2>Seja bem vindo!</h2>
            <p>Entre com seus dados</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" id="email" placeholder="Email" {...register('email')} />
                <input type="password" id="password" placeholder="Senha" {...register('password')} />
                <Button
                    text="Entrar"
                />
            </form>
            <span>
                <Link to="/recover">Esqueceu senha ?</Link>
            </span>

        </Container>
    );
};

